import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateProducts1597331191609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:
        }
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
