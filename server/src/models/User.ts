import { Food } from "./Food";

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsNotEmpty } from "class-validator";

/**
 * @param { age } : user age
 * @param { gender } : user gender
 * @param { name } : user name
 * @param { id } : sns id
 * @param { provider } : sns login ex) kakao ..
 */

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @IsNotEmpty()
  @Column({ type: "uuid", length: 30 })
  public name!: string;

  @IsNotEmpty()
  @Column()
  public gender!: string;

  @IsNotEmpty()
  @Column("int")
  public age!: number;

  @IsNotEmpty()
  @Column({ default: "local" })
  public provider!: string;

  @OneToMany((type) => Food, (food) => food.user)
  public foods!: Food[];
}
