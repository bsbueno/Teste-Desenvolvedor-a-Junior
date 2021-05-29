import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateQuadrinho1622153463790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
              name: "quadrinho",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  generationStrategy: "uuid",
                },
                {
                  name: "titulo",
                  type: "varchar(200)"
                },
                {
                  name: "valor",
                  type: "money"
                }, 
                {
                    name: "categoria",
                    type: "varchar(200)"
                },
                
                {
                    name: "editora",
                    type: "varchar(200)"
                },
                {
                    name: "volume",
                    type: "varchar(200)"
                }

              ]
            })
          );
        
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
