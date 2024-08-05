import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { PhoneNumber } from "./PhoneNumber.js";
import { Schedule } from "./Schedule.js";
import { Unit } from "./Unit.js";

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

  @Column()
  email: string;

  @ManyToOne(() => Unit, (unit) => unit.staff)
  @JoinColumn()
  unit: Relation<Unit>;

  @OneToMany(() => PhoneNumber, (phoneNumber) => phoneNumber.person)
  phoneNumbers: Relation<PhoneNumber>[];

  @OneToMany((shifts) => Schedule, (schedule) => schedule.employee)
  schedule: Relation<Schedule>[];
}
