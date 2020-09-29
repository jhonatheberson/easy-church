// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {
  public async index ({ response }) {
    const user = await User.all()

    if (!user) {
      return response.status(401).json({ error: 'has no user' })
    }

    return response.status(200).json(user)
  }

  public async store ({ request, response }) {
    const postsSchema = schema.create({
      name: schema.string({}, [rules.alpha()]),
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      /**
      Valid data: {
        password: 'secret',
        password_confirmation: 'secret'
          }
      */
      password: schema.string({}, [rules.confirmed()]),
    })

    const validatedData = await request.validate({
      schema: postsSchema,
    })

    const user = await User.create({
      name: validatedData.name,
      email: validatedData.email,
      password: validatedData.password,
    })

    return response.json({ user })
  }

  public async update ({ request, auth, response }) {
    const body = request.all()

    await auth.authenticate()

    const user = await User.findBy('email', body.email)

    if (!user) {
      return response
        .status(401)
        .json({ error: 'user does not exist with this email' })
    }

    await Hash.restore()

    if (!(await Hash.verify(user.password, body.oldPassword))) {
      return response.status(401).json({
        error: 'incorrect password',
      })
    }

    user.password = body.password

    await user.save()

    return response.status(200).json(user)
  }
}
