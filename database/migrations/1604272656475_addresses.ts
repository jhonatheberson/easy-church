import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('street', 150).notNullable()
      table.integer('number').notNullable()
      table.string('zip_code', 15)
      table.string('city', 50)
      table.string('state', 50)
      table.string('contry', 50)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
