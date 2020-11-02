import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Churches extends BaseSchema {
  protected tableName = 'churches'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('address_id').references('id').inTable('addresses')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['user_id'])
      table.dropForeign(['address_id'])
    })
  }
}
