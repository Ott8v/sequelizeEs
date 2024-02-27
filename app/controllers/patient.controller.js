const db = require('../models');
const Patient = db.patients;
const Op = db.Sequelize.Op;

exports.create = async (req, res) =>{
    if(!req.body){
        res.status(400).send("Can't be empty");
        console.log("Hello")
        return;
    }

    const patient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        cf: req.body.cf,
        blood: req.body.blood,
        sex: req.body.sex,
        nationality: req.body.nationality,
        email: req.body.email
    };

    try{
        await Patient.create(patient);
        res.send('Patient created');
    }catch(err){
        res.status(500).send("An error occured while creating Patient");
    }
    
}