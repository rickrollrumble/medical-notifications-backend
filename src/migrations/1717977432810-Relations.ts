import { MigrationInterface, QueryRunner } from "typeorm";

export class Relations1717977432810 implements MigrationInterface {
    name = 'Relations1717977432810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` ADD \`unitId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`person\` ADD CONSTRAINT \`FK_d2267005c5675030879f4507871\` FOREIGN KEY (\`unitId\`) REFERENCES \`unit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP FOREIGN KEY \`FK_d2267005c5675030879f4507871\``);
        await queryRunner.query(`ALTER TABLE \`person\` DROP COLUMN \`unitId\``);
    }

}
