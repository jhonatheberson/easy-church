import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Treasuries extends BaseSchema {
  protected tableName = 'treasuries'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.foreign('user_id').references('id').inTable('users')
      table
        .integer('church_id')
        .references('id')
        .inTable('churches')
        .notNullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['user_id'])
      table.dropColumn('church_id')
    })
  }
}
