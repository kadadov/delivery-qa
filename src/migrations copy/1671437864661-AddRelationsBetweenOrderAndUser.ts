import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationsBetweenOrderAndUser1671437864661 implements MigrationInterface {
    name = 'AddRelationsBetweenOrderAndUser1671437864661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "userIdUserId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_213662113ff242f629379d0f676" FOREIGN KEY ("userIdUserId") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_213662113ff242f629379d0f676"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "userIdUserId"`);
    }

}
