import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Churches extends BaseSchema {
  protected tableName = 'churches'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.string('shepherd', 50).notNullable()
      table.string('phone', 20)
      table.integer('user_id').notNullable()
      table.integer('address_id').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
