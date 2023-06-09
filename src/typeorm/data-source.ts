import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { News } from "./entities/News";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'postgres',
    password: 'docker',
    port: 54321,
    entities: [User, News],
    synchronize: true,
});

AppDataSource.initialize().then(() => console.log("Conectado"));
