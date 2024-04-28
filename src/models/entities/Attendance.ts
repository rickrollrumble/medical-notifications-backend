import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Attendance {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "status", type: "int" })
    Status: number;

    @Column({ name: "personId", type: "int" })
    PersonId: number;

    @CreateDateColumn({ name: "loggedAt", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    LoggedAt: Date;
}
