import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class People extends BaseSchema {
  protected tableName = "people";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name", 50).notNullable();
      table.string("identity", 15);
      table.string("CPF", 15).notNullable();
      table.string("mother", 100);
      table.string("father", 100);
      table.string("cell_phone", 11);
      table.string("phone", 10).notNullable();
      table.date("birth").notNullable();
      table.string("civil_status", 20);
      table.string("nationality", 50);
      table
        .integer("addreId")
        .unsigned()
        .references("id")
        .inTable("addres")
        .onDelete("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
