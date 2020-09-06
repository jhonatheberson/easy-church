import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Addres extends BaseSchema {
  protected tableName = "addres";

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .integer("church_id")
        .unsigned()
        .references("id")
        .inTable("churches")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn("church_id");
    });
  }
}
