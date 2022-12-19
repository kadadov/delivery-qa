import {MigrationInterface, QueryRunner} from "typeorm";

export class Seeds1658071350215 implements MigrationInterface {
    name = 'Seeds1658071350215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO tags (title) VALUES
                ('suzuki'), ('gsf 600'), ('1996'), ('red') 
        `);

        await queryRunner.query(`
            INSERT INTO users (email, name, password) VALUES
                ('admin@local.local', 'admin', '$2b$05$Z9MUk5s7b5y6KwMCmsrou.VgwqaaegUjhbQpUg9r4FmAUHPT1bMPi'),
                ('user@local.local', 'user', '$2b$05$PeJPQfErlil9JBWektdBNul3oXIKxs3ufSItQpXHf3bnAIxu3f5QK')
        `);

        await queryRunner.query(`
            INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES
                ('title', 'title', 'description', 'body', 'suzuki,gsf', 1)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
