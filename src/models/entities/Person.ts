import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

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

    @CreateDateColumn({ name: "createdAt", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    CreatedAt: Date;
}
