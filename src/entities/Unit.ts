import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Person } from "./Person.js";

@Entity()
export class Unit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Person, (person) => person.unit)
    staff: Relation<Person>[];
}