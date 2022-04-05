import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1646938492119 implements MigrationInterface {
    name = 'InitialMigration1646938492119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "did" ("id" character varying NOT NULL, "did" character varying NOT NULL, CONSTRAINT "PK_0dc9d7e04ff213c08a096f835f2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     
        await queryRunner.query(`DROP TABLE "did"`);
    }

}
