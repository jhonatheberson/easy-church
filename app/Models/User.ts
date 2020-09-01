import { DateTime } from "luxon";
import { column, BaseModel, beforeSave } from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column()
  public password: string;

  @column.date()
  public created_at: DateTime;

  @column.date()
  public updated_at: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.hash(user.password);
    }
  }
}
