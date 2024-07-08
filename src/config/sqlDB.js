import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.SQL_USER, process.env.SECRETKEY, {
    host: process.env.SQL_HOST,
    dialect: 'mysql',
    port:process.env.SQL_PORT ,
    dialectOptions: {
        connectTimeout: 10000
    }, 
});

