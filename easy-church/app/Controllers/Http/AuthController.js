'use strict'

const User = use('App/Models/User') // pegadondo o models user para ser usado

class AuthController {
  assync register({request}) { //pegando dados do banco
    const data = request.only(['username', 'email', 'password'])

  const user =  await User.create(data)

  return user
  }
  assync authenticate() {

  }
}

module.exports = AuthController
