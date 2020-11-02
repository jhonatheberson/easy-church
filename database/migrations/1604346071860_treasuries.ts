import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Treasuries extends BaseSchema {
  protected tableName = 'treasuries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('tenth').notNullable()
      table.integer('offer').notNullable()
      table.integer('user_id')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
