'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')  //chamando o controler e o metodo nesse caso o register
Route.post('/authenticate', 'AuthController.authenticate')  //chamando o controler e o metodo nesse caso o register
Route.post('/registermember', 'MemberController.registermember')  //chamando o controler e o metodo nesse caso o register

Route.get('/members', 'MemberController.members')  //chamando o controler e o metodo nesse caso o register


Route.get('/app', "AppController.index").middleware(['auth']);
