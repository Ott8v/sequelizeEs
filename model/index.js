import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

console.log(process.env.DB_HOST)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PSSW, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
} catch (e) {
    console.error(e);
}