import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn("increment", { name: "id" })
    id: number;

    @Column("firstName")
    FirstName: string;

    @Column("middleName")
    MiddleName: string;

    @Column("lastName")
    LastName: string;

    @Column("createdAt")
    CreatedAt: string;
}
