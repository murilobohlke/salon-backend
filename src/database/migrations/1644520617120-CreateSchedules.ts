import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSchedules1644520617120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schedules",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "start_time",
                        type: "timestamp",
                    },
                    {
                        name: "end_time",
                        type: "timestamp"
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "procedure_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys : [
                    {
                        name: "FK_user_id",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FK_procedure_id",
                        columnNames: ["procedure_id"],
                        referencedTableName: "procedures",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schedules")
    }

}
