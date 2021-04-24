import { MigrationInterface, QueryRunner } from 'typeorm';

export class createHeroesTable1616153317148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE heroservice.hero (
        id uuid NOT NULL DEFAULT public.uuid_generate_v4(),
        "name" varchar NOT NULL,
        "enable" bool NOT NULL DEFAULT true,
        race varchar NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT heroes_pk PRIMARY KEY (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE heroservice.hero');
  }
}
