import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1664186309173 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" text NOT NULL, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754" UNIQUE ("username"), CONSTRAINT "PK_03b91d2b8321aa7ba32257dc321" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_b67337b7f8aa8406e936c2ff75" ON "public"."user" ("username") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b67337b7f8aa8406e936c2ff75"`,
    );
    await queryRunner.query(`DROP TABLE "public"."user"`);
  }
}
