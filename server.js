const express = require('express');
require('dotenv').config();
const db = require("./app/models");
const app = express();

app.use(express.json());
db.sequelize.sync();

require('./app/routes/patient.route.js');

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});