import test from 'japa';
import supertest from 'supertest';
import Database from '@ioc:Adonis/Lucid/Database';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;

test.group('User', (group) => {
  test('list Users ', async () => {
    /**
     * Make request
     */
    const { text } = await supertest(BASE_URL)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200);

    const body = JSON.parse(text); // convert string in json;
    console.log(body);
  });

  test('Create User', async () => {
    const { text } = await supertest(BASE_URL)
      .post('/users')
      .send({
        name: 'testename',
        email: 'test@gmail.com',
        password: '1234',
        password_confirmation: '1234',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    const body = JSON.parse(text); // convert string in json
    console.log(body.user.name);
  });

  //test('Update User', async (assert) => {
  // const { body } = await supertest(BASE_URL)
  //.put('/users')
  //  .send({
  //   email: 'test@gmail.com',
  //    oldPassword: '1234',
  //     password: '12345',
  //     confirmPassword: '12345',
  //    })
  //    .set('Accept', 'application/json')
  //    .set('Authorization', `Bearer ${token}`)
  //     .expect('Content-Type', /json/);
  // });

  //test('ensure user password gets hashed during save', async (assert) => {
  //const user = new User();
  //user.email = 'virk@adonisjs.com';
  //user.password = 'secret';
  //await user.save();

  //assert.notEqual(user.password, 'secret');
  //});

  group.beforeEach(async () => {
    await Database.beginGlobalTransaction(); // isso faz que nada fique no banco
  });

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction(); //isso faz que nada fique no banco depois
  });
});
