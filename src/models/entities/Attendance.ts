import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Attendance {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "status", type: "int" })
    Status: number;

    @ManyToOne((type)=>Person, (person)=>person.id)
    PersonId: Person;

    @CreateDateColumn({ name: "loggedAt", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    LoggedAt: Date;
}
