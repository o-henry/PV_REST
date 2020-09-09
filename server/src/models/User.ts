import {
  BeforeInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

import { Food } from "./Food";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @IsNotEmpty()
  @Column({ name: "name" })
  public name: string;

  @IsNotEmpty()
  @Column()
  public gender!: string;

  @IsNotEmpty()
  @Column()
  public age!: string;

  // @OneToMany((type) => Food, (food) => food.user)
  // public foods!: Food[];
}
