import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1717976127956 implements MigrationInterface {
    name = 'Initial1717976127956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`unit\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`middleName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`dateOfBirth\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`person\``);
        await queryRunner.query(`DROP TABLE \`unit\``);
    }

}
