import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
import * as bcrypt from "bcrypt";

import { Food } from "./Food";

/**
 * @param { age } : user age
 * @param { gender } : user gender
 * @param { sns } : user sns id
 * @param { name } : user name
 * @param { id } : sns id
 * @param { provider } : sns login ex) kakao ..
 */

@Entity()
export class User {
  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(
        password,
        10,
        (err: any, hash: string | PromiseLike<string>) => {
          if (err) {
            return reject(err);
          }
          resolve(hash);
        }
      );
    });
  }

  @PrimaryGeneratedColumn("uuid")
  public id!: number;

  @IsNotEmpty()
  @Column()
  @Exclude()
  public password: string;

  @IsNotEmpty()
  @Column()
  public username!: string;

  @IsNotEmpty()
  @Column()
  public gender!: string;

  @IsNotEmpty()
  @Column()
  public age!: string;

  @OneToMany((type) => Food, (food) => food.user)
  public foods!: Food[];
}
