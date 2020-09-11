import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

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
}
