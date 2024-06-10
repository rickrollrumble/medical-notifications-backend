import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneNumber1717978335498 implements MigrationInterface {
    name = 'AddPhoneNumber1717978335498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`phone_number\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('home', 'mobile', 'work') NOT NULL DEFAULT 'mobile', \`areaCode\` int NOT NULL, \`prefix\` int NOT NULL, \`lineNumber\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`email\``);
        await queryRunner.query(`DROP TABLE \`phone_number\``);
    }

}
