import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn("increment", { name: "id" })
    id: number;

    @Column({ name: "firstName", type: "varchar" })
    FirstName: string;

    @Column({ name: "middleName", type: "varchar" })
    MiddleName: string;

    @Column({ name: "lastName", type: "varchar" })
    LastName: string;

    @Column({ name: "createdAt", type: "varchar" })
    CreatedAt: string;
}
