import { faker } from "@faker-js/faker";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Person } from "../entities/Person.js";
import { PhoneNumber } from "../entities/PhoneNumber.js";
import { Unit } from "../entities/Unit.js";

export class SeedData1719723253170 implements MigrationInterface {
    name?: string;
    transaction?: boolean;

    public async up(queryRunner: QueryRunner): Promise<void> {
        const units: Unit[] = [];
        for (let i = 1; i <= 5; i++) {
            const unit = await queryRunner.manager.save(
                queryRunner.manager.create(Unit, { name: `Unit_${i}` })
            );
            units.push(unit);
        }

        for (const unit of units) {
            for (let j = 0; j < 5; j++) {
                const person = await queryRunner.manager.save(
                    queryRunner.manager.create(Person, {
                        firstName: faker.person.firstName(),
                        middleName: faker.person.middleName(),
                        lastName: faker.person.lastName(),
                        dateOfBirth: faker.date.birthdate(),
                        email: faker.internet.email(),
                        unit: unit,
                    })
                );
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // fetch all people
        const people = await queryRunner.manager.find(Person);

        // remove them in reverse order of insertion
        for (let i = people.length - 1; i >= 0; i--) {
            await queryRunner.manager.remove(people[i]);
        }

        // then fetch all units
        const units = await queryRunner.manager.find(Unit);

        // remove all units in reverse order
        for (const unit of units) {
            await queryRunner.manager.remove(unit);
        }

        // then fetch all phone numbers
        const phoneNumbers = await queryRunner.manager.find(PhoneNumber);

        // remove all phone numbers in reverse order
        for (const phoneNumber of phoneNumbers) {
            await queryRunner.manager.remove(phoneNumber);
        }
    }

}
