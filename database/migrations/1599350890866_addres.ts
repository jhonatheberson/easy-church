import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addres extends BaseSchema {
  protected tableName = 'addres'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('street', 150).notNullable()
      table.integer('number').notNullable()
      table.string('zip_code', 10)
      table.string('city', 50)
      table.string('state', 2)
      table.string('contry', 100)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
