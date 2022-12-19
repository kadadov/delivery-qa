import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelations1671453236009 implements MigrationInterface {
    name = 'AddRelations1671453236009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "employeeIdEmployeeId" integer`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "jobIdJobId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_567a6aaa47aebd8f4b91a93f6e3" FOREIGN KEY ("employeeIdEmployeeId") REFERENCES "employees"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_70464eb984c865154b812467a07" FOREIGN KEY ("jobIdJobId") REFERENCES "jobs"("job_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_70464eb984c865154b812467a07"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_567a6aaa47aebd8f4b91a93f6e3"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "jobIdJobId"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "employeeIdEmployeeId"`);
    }

}
