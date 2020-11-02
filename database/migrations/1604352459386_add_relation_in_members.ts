import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Members extends BaseSchema {
  protected tableName = 'members'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.foreign('church_id').references('id').inTable('churches')
      table.foreign('person_id').references('id').inTable('people')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['church_id'])
      table.dropForeign(['person_id'])
    })
  }
}
