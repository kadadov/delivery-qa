import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1671434431402 implements MigrationInterface {
    name = 'CreateUsers1671434431402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("user_id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "phone" character varying NOT NULL DEFAULT '', "address" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
