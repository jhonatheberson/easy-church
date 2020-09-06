import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Churches extends BaseSchema {
  protected tableName = "churches";

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn("addres_id");
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table
        .integer("addres_id")
        .unsigned()
        .references("id")
        .inTable("addres")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  }
}
