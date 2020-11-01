import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Church from './Church'

export default class User extends BaseModel {
  /**
   * @param  {true}} {isPrimary
   * @returns number
   */
  @column({ isPrimary: true })
  public id: number

  /**
   * @param  {} {}
   * @param  {string} publicname
   * @returns string
   */
  @column({})
  public name: string

  /**
   * @param  {} {}
   * @param  {string} publicemail
   * @returns string
   */
  @column({})
  public email: string

  /**
   * Foreign key
   * @param  {number} publicpersonId
   * @returns number
   */
  @column()
  public personId: number

  /**
   Foreign key churchId
   * @param  {number} publicchurchId
   * @returns number
   */
  @column()
  public churchId: number

  /**
   * @param  {string} publicrememberMeToken?
   * @returns string
   */
  @column()
  public rememberMeToken?: string

  /**
   * @param  {string} publicpassword
   * @returns string
   */
  @column()
  public password: string

  /**
   * @param  {true}} {autoCreate
   * @returns DateTime
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   * @param  {true} {autoCreate
   * @param  {true}} autoUpdate
   * @returns DateTime
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Church)
  public churchs: HasMany<typeof Church>
}
