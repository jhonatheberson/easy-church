import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .foreign('person_id')
        .references('id')
        .inTable('people')
        .onDelete('CASCADE')
      table
        .foreign('church_id')
        .references('id')
        .inTable('churches')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {})
  }
}
