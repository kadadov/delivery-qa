import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationsBetweenOrderAndEmployee1671451885290 implements MigrationInterface {
    name = 'AddRelationsBetweenOrderAndEmployee1671451885290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "employeeIdEmployeeId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_567a6aaa47aebd8f4b91a93f6e3" FOREIGN KEY ("employeeIdEmployeeId") REFERENCES "employees"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_567a6aaa47aebd8f4b91a93f6e3"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "employeeIdEmployeeId"`);
    }

}
