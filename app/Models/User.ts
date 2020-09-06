import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Church from "./Church";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({})
  public name: string;

  @column({})
  public email: string;

  @column()
  public password: string;

  @column()
  public addres: number;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Foreign key
  @column()
  public churchId: number;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @hasMany(() => Church)
  public churchs: HasMany<typeof Church>;
}
