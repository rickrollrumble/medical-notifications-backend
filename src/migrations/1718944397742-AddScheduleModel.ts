import { MigrationInterface, QueryRunner } from "typeorm";

export class AddScheduleModel1718944397742 implements MigrationInterface {
    name = 'AddScheduleModel1718944397742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP FOREIGN KEY \`FK_f704d1efccc051a5520b503d55e\``);
        await queryRunner.query(`CREATE TABLE \`schedule\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startWorkDate\` datetime NOT NULL, \`startHour\` int NOT NULL, \`endWorkDate\` datetime NOT NULL, \`endHour\` int NOT NULL, \`isHoliday\` tinyint NOT NULL, \`isWeekend\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP COLUMN \`personId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD \`personId\` int NULL`);
        await queryRunner.query(`DROP TABLE \`schedule\``);
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD CONSTRAINT \`FK_f704d1efccc051a5520b503d55e\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
