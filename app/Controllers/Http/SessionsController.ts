import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async store ({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })
    return token.toJSON()
  }
}
