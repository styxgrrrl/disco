import { ConnectionOptions } from "typeorm";
import { v4 } from "uuid";
import { isProduction } from "./env";

export const getTypeOrmConfig = (): ConnectionOptions => {
  return isProduction ? getProdConfig() : getTestConfig()
}

export const getTestConfig = (): ConnectionOptions => {
  return {
    name: "default",
    type: "sqlite",
    database: `tmp/dbTest/disco-full-stack-${v4()}.sqlite`,
    synchronize: true,
    entities: [`${__dirname}/../entity/*{.ts,.js}`],
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    subscribers: [`${__dirname}/../subscriber/*{.ts,.js}`]
  }

}

export const getProdConfig = (): ConnectionOptions => {
  return {
    name: "default",
    type: "postgres",
    synchronize: false,
    dropSchema: false,
    migrationsRun: true,
    entities: [`${__dirname}/../entity/*{.ts,.js}`],
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    url: process.env.DB_URL,
    cli: { migrationsDir: `${__dirname}/../migrations/`}
  }
}