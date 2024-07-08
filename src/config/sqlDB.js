import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('test', 'avnadmin', 'AVNS_zRtMSI2p1PUDzIOe-fJ', {
    host: "139.59.22.67",
    dialect: 'mysql',
    port: 28929,
    dialectOptions: {
        connectTimeout: 20000
    },
    logging: console.log 
});

