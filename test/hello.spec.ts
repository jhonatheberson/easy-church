import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Japa', (group) => {
  test('assert hello world', (assert) => {
    assert.equal('hello world', 'hello world')
  })

  group.beforeEach(async () => {
    await Database.beginGlobalTransaction() // isso faz que nada fique no banco
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction() //isso faz que nada fique no banco depois
  })
})
