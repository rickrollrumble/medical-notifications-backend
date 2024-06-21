import { MigrationInterface, QueryRunner } from "typeorm";

export class FixRelations1718944574140 implements MigrationInterface {
    name = 'FixRelations1718944574140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD \`personId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD UNIQUE INDEX \`IDX_f704d1efccc051a5520b503d55\` (\`personId\`)`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD UNIQUE INDEX \`IDX_b81737400cce9875401177fd48\` (\`employeeId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f704d1efccc051a5520b503d55\` ON \`phone_number\` (\`personId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b81737400cce9875401177fd48\` ON \`schedule\` (\`employeeId\`)`);
        await queryRunner.query(`ALTER TABLE \`phone_number\` ADD CONSTRAINT \`FK_f704d1efccc051a5520b503d55e\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD CONSTRAINT \`FK_b81737400cce9875401177fd48b\` FOREIGN KEY (\`employeeId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP FOREIGN KEY \`FK_b81737400cce9875401177fd48b\``);
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP FOREIGN KEY \`FK_f704d1efccc051a5520b503d55e\``);
        await queryRunner.query(`DROP INDEX \`REL_b81737400cce9875401177fd48\` ON \`schedule\``);
        await queryRunner.query(`DROP INDEX \`REL_f704d1efccc051a5520b503d55\` ON \`phone_number\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP INDEX \`IDX_b81737400cce9875401177fd48\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP INDEX \`IDX_f704d1efccc051a5520b503d55\``);
        await queryRunner.query(`ALTER TABLE \`phone_number\` DROP COLUMN \`personId\``);
    }

}
