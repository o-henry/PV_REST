import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * @param Entity : 개체
 * @param PrimaryGeneratedColumn : Auto PK
 * @param Column : Column
 * @param id : PK
 */

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: "uuid", length: 30 })
  public name!: string;

  @Column()
  public gender!: string;

  @Column("int")
  public age!: number;
}
