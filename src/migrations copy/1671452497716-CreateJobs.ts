import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateJobs1671452497716 implements MigrationInterface {
    name = 'CreateJobs1671452497716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jobs" ("job_id" SERIAL NOT NULL, "job_type" character varying NOT NULL, "hours" integer NOT NULL DEFAULT '', "salary" integer NOT NULL DEFAULT '', CONSTRAINT "PK_75f2e130e4b1372fea0b6248a17" PRIMARY KEY ("job_id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "jobIdJobId" integer`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_70464eb984c865154b812467a07" FOREIGN KEY ("jobIdJobId") REFERENCES "jobs"("job_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_70464eb984c865154b812467a07"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "jobIdJobId"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
    }

}
