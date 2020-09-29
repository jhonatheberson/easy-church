import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Addre extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column()
  public number: number

  @column()
  public zipCode: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public contry: string

  @column()
  public churchId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
