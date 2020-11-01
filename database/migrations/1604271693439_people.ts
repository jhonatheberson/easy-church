import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('surname', 200)
      table.string('identity', 16).notNullable().unique()
      table.string('CPF', 15).notNullable().unique()
      table.string('mother', 200)
      table.string('father', 200)
      table.string('cell_phone', 13)
      table.string('phone', 13)
      table.date('birth')
      table.string('civil_status', 50)
      table.string('nationality', 50)
      table.integer('addre_id')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
