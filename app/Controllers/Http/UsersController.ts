// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

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
}
