import { MigrationInterface, QueryRunner } from "typeorm";

export class PhoneNumberRelation1717978630684 implements MigrationInterface {
    name = 'PhoneNumberRelation1717978630684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD \`personId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD CONSTRAINT \`FK_f704d1efccc051a5520b503d55e\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP FOREIGN KEY \`FK_f704d1efccc051a5520b503d55e\``);
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP COLUMN \`personId\``);
    }

}
