import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Person } from "./Person.js";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startWorkDate: Date;

    @Column()
    startHour: number;

    @Column()
    endWorkDate: Date;

    @Column()
    endHour: number;

    @Column()
    isHoliday: boolean;

    @Column()
    isWeekend: boolean;

    @OneToOne(()=>Person)
    employee: Relation<Person>;
}