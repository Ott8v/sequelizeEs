import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database', 'username', 'pass', {
    host: 'localhost',
    dialect: 'mysql'
});