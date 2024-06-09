import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;
}
