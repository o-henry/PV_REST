import { Food } from "./Food";

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsNotEmpty } from "class-validator";

/**
 * @param { Entity } : 개체
 * @param { PrimaryGeneratedColumn } : Auto PK
 * @param { Column } : Column
 * @param { id } : PK
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

  @OneToMany((type) => Food, (food) => food.user)
  public foods!: Food[];
}
