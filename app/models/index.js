const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PSSW, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.patients = require('./patient.model.js')(sequelize,Sequelize);
db.doctors = require('./patient.model.js')(sequelize, Sequelize);

module.exports = db;