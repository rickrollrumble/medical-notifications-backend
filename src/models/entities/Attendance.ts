import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attendance {

    @PrimaryGeneratedColumn()
    id: string;

    @Column("status")
    Statun: number;

    @Column("personId")
    PersonId: number;

    @Column("loggedAT")
    LoggedAt: string;
}
