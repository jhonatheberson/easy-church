// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

export default class UsersController {
  public async index({ response }) {
    const user = await User.all();

    if (!user) {
      return response.status(401).json({ error: "has no user" });
    }

    return response.status(200).json(user);
  }

  public async store({ request, response }) {
    const body = request.post();

    const user = await User.create({
      email: body.email,
      password: body.password,
    });

    return response.json({ user });
  }

  public async update({ request, auth, response }) {
    const body = request.all();

    await auth.authenticate();

    const user = await User.findBy("email", body.email);

    if (!user) {
      return response
        .status(401)
        .json({ error: "user does not exist with this email" });
    }

    if (!(await Hash.verify(user.password, body.oldPassword))) {
      return response.status(401).json({
        error: "incorrect password",
      });
    }

    user.password = await Hash.make(body.password);
    await user.save();

    return response.status(200).json(user);
  }
}
