import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrders1671437657200 implements MigrationInterface {
    name = 'CreateOrders1671437657200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" SERIAL NOT NULL, "delivery_time" integer NOT NULL, "items" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
