import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
} from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Addre from "./Addre";

export default class Church extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public sheperd: string;

  @column()
  public office: string;

  @column()
  public phone: string;

  @column()
  public addresId: number;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => User)
  public users: HasMany<typeof User>;

  @hasOne(() => Addre)
  public addres: HasOne<typeof Addre>;
}
