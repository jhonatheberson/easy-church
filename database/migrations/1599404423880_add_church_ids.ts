import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table
        .integer('church_id')
        .unsigned()
        .references('id')
        .inTable('churches')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .defaultTo(null)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('churchId')
    })
  }
}
