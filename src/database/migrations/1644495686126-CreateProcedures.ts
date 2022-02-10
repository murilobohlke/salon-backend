import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProcedures1644495686126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "procedures",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "color",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "varchar"
                    },
                    {
                        name: "image",
                        type: "varchar",
                        default: null,
                        isNullable: true
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("procedures")
    }

}
