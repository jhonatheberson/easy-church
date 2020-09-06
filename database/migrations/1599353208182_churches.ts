import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Churches extends BaseSchema {
  protected tableName = "churches";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name", 100);
      table.string("shepherd", 100);
      table.string("office", 100);
      table.string("phone", 12);
      table
        .integer("addres_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
