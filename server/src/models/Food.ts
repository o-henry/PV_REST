import { User } from "./User";

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

/**
 * @param { id } : PK
 * @param { calorie } : NUTR_CONT1
 * @param { sugar } : NUTR_CONT5
 * @param { natrium } : NUTR_CONT6
 * @param { carbohydrate } : NUTR_CONT2
 */

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @IsNotEmpty()
  @Column({ type: "uuid", length: 30 })
  public name!: string;

  @IsNotEmpty()
  @Column()
  public calorie!: number;

  @IsNotEmpty()
  @Column()
  public sugar!: number;

  @IsNotEmpty()
  @Column()
  public natrium!: number;

  @IsNotEmpty()
  @Column()
  public carbohydrate!: number;

  @IsNotEmpty()
  @CreateDateColumn()
  public createdDate!: Date;

  @Column({ name: "user_id", nullable: true })
  public userId!: string;

  @ManyToOne((type) => User, (user) => user.foods)
  @JoinColumn({ name: "user_id" })
  public user!: User;
}
