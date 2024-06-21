import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Person } from "./Person.js";

enum NumberType {
    HOME = "home",
    MOBILE = "mobile",
    WORK = "work"
}

@Entity()
export class PhoneNumber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: NumberType, default: NumberType.MOBILE })
    type: NumberType;

    @Column()
    areaCode: number;

    @Column()
    prefix: number;

    @Column()
    lineNumber: number;

    @OneToOne(() => Person)
    @JoinColumn()
    person: Relation<Person>;
}