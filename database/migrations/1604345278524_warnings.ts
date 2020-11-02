import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Warnings extends BaseSchema {
  protected tableName = 'warnings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('warning', 200)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
