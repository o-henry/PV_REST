import {
  BeforeInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
import * as bcrypt from "bcrypt";

import { Food } from "./Food";

@Entity()
export class User {
  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(
        password,
        12,
        (err: any, hash: string | PromiseLike<string>) => {
          if (err) {
            return reject(err);
          }
          resolve(hash);
        }
      );
    });
  }

  public static comparePassword(
    user: User,
    password: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        resolve(res === true);
      });
    });
  }

  @PrimaryGeneratedColumn("uuid")
  public id!: number;

  @IsNotEmpty()
  @Column()
  public nickname!: string;

  @IsNotEmpty()
  @Column()
  @Exclude()
  public password: string;

  @IsNotEmpty()
  @Column({ name: "name" })
  public name: string;

  @IsNotEmpty()
  @Column()
  public gender!: string;

  @IsNotEmpty()
  @Column()
  public age!: string;

  @Column({ name: "refresh_token", nullable: true, select: false })
  refreshToken: string;

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await User.hashPassword(this.password);
  }

  @OneToMany((type) => Food, (food) => food.user)
  public foods!: Food[];
}
