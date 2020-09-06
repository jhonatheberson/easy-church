import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class People extends BaseSchema {
  protected tableName = "people";

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn("name", "surname");
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn("surname", "name");
    });
  }
}
