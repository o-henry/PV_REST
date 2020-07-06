import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { User } from "./User";

/**
 * @param { id } : PK
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
  @CreateDateColumn()
  public createdDate!: Date;

  @ManyToOne((type) => User, (user) => user.foods)
  public user!: User;
}
