'use strict'

const User = use('App/Models/User') // pegadondo o models user para ser usado

class AuthController {
    async register({request}) { //pegando dados do banco
      const data = request.only(['username', 'email', 'password'])

      const user =  await User.create(data)

      return user
  }
  async authenticate({request, auth}) {
      const {email, password} =  request.all()

      const token = await auth.attempt(email, password)

      return token
  }
}

module.exports = AuthController
