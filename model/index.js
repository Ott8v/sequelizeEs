import { DataTypes, Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

console.log(process.env.DB_HOST)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PSSW, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

const Patient = sequelize.define('Patient', {
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

// await Patient.sync({ alter: true });
