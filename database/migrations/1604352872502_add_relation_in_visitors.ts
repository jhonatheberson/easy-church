import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Visitors extends BaseSchema {
  protected tableName = 'visitors'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.foreign('church_id').references('id').inTable('churches')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['church_id'])
    })
  }
}
