import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

/**
 * @param id : PK
 */

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public calorie!: number;

  @Column()
  public sugar!: number;

  @CreateDateColumn()
  public createdDate!: Date;

  @ManyToOne((type) => User, (user) => user.foods)
  public user!: User;
}
