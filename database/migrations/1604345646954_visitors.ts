import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Visitors extends BaseSchema {
  protected tableName = 'visitors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 30).notNullable()
      table.string('cell_phone', 15)
      table.integer('church_id')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
