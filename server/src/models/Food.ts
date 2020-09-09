import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

import { User } from "./User";

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  // @IsNotEmpty()
  // @Column()
  // public name!: string;

  // @IsNotEmpty()
  // @Column()
  // public calorie!: number | undefined;

  // @IsNotEmpty()
  // @Column()
  // public sugar!: number | undefined;

  // @IsNotEmpty()
  // @Column()
  // public natrium!: number | undefined;

  // @IsNotEmpty()
  // @Column()
  // public carbohydrate!: number | undefined;

  @IsNotEmpty()
  @CreateDateColumn({ name: "created_at" })
  public createdDate?: Date;

  @Column({ name: "user_id", nullable: true })
  public userId!: string;

  // @ManyToOne((type) => User, (user) => user.foods)
  // @JoinColumn({ name: "user_id" })
  // public user!: User;
}
