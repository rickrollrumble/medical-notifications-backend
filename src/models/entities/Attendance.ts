import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attendance {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: "status", type: "int" })
    Status: number;

    @Column({ name: "personId", type: "int" })
    PersonId: number;

    @Column({ name: "loggedAt", type: "timestamp", default: "CURRENT_TIMESTAMP" })
    LoggedAt: string;
}
