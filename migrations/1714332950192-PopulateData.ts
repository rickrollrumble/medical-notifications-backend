import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateData1714332950192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO person (firstName, middleName, lastName) VALUES (?, ?, ?)", ['Long', 'John', 'Silver']);
        await queryRunner.query("INSERT INTO person (firstName, middleName, lastName) VALUES (?, ?, ?)", ['Bubba', 'Gump', 'Shrimp']);
        await queryRunner.query("INSERT INTO person (firstName, middleName, lastName) VALUES (?, ?, ?)", ['Ole', 'Gunnar', 'Solskjaer']);
        await queryRunner.query("INSERT INTO person (firstName, middleName, lastName) VALUES (?, ?, ?)", ['Harry', 'James', 'Potter']);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [1, 2]);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [1, 3]);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [1, 4]);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [2, 2]);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [2, 3]);
        await queryRunner.query("INSERT INTO attendance (status, personId) VALUES (?,?)", [2, 4]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM `attendance`");
        await queryRunner.query("DELETE FROM `person`");
    }

}
