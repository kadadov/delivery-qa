<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Описание

Учебный проект

- [Endpoints](https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints)

## Установка

Создать .env файл

```
DATABASE_USER=dev
DATABASE_PASSWORD=dev
DATABASE_NAME=dev
DATABASE_HOST=localhost
JWT_SECRET=dev
```

```bash
# установка npm зависимостей
$ yarn install

# накатить миграции и сиды
$ yarn db:reset
```

## Запуск

```bash
# запуск Docker
$ docker-compose up -d

# запуск проекта в watch режиме
$ yarn start:dev
```

## Миграции

```bash
# создать миграцию
$ yarn db:create

# накатить миграции
$ yarn db:migrate

# удалить миграции
$ yarn db:drop
```

##

```bash
# накатить сиды
$ yarn seed
```
