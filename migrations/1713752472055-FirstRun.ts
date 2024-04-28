import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";


export default class FirstRun1713752472055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "person",
            columns: [
                { name: "id", isPrimary: true, generationStrategy: "increment", type: "int", isGenerated: true },
                { name: "firstName", isPrimary: false, isNullable: false, type: "varchar" },
                { name: "middleName", isPrimary: false, isNullable: false, type: "varchar" },
                { name: "lastName", isPrimary: false, isNullable: false, type: "varchar" },
                { name: "createdAt", type: "timestamp", default: "now()", isGenerated: true }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "attendance",
            columns: [
                { name: "id", isPrimary: true, generationStrategy: "increment", type: "int", isGenerated:true },
                { name: "status", isNullable: false, type: "tinyint", default: 1 },
                { name: "personId", type: "int", isNullable: false },
                { name: "loggedAt", type: "timestamp", default: "now()", isGenerated:true }
            ]
        }), true);

        await queryRunner.createForeignKey("attendance", new TableForeignKey({
            columnNames: ["personId"],
            referencedColumnNames: ["id"],
            "referencedTableName": "person",
            "onDelete": "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const foreignKey = (await queryRunner.getTable("attendance"))?.foreignKeys.find(fk => fk.columnNames.indexOf("personId") !== -1);
        if (foreignKey instanceof TableForeignKey) await queryRunner.dropForeignKey("attendance", foreignKey);

        await queryRunner.dropTable("attendance");
        await queryRunner.dropTable("person");
    }

}
