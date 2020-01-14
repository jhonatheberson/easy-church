'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/



/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');


// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
var chance = require('chance');
const faker = require('faker');
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.name(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint("App/Models/Member", async (chance) => {
  return {
    username: chance.name(),
    email: chance.email(),
    password: await Hash.make(chance.password()),
    phone: chance.phone({ formatted: false }),
    address: chance.address(),
    baptized: chance.bool(),
    baptized_spirit: chance.bool(),
    id_church: chance.integer({ min: 1, max: 1 })
  }
})

Factory.blueprint("App/Models/Church", (chance) => {
  return {
    name: chance.name(),
    cnpj: chance.integer({min:1, max:11}),
    address: chance.address(),
    logo: chance.avatar()
  }
});
