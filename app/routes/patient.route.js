module.exports = (app) => {
    const patients = require('../controllers/patient.controller.js');
    let router = require("express").Router();
    router.post('/', patients.create);
    router.get("/:id")
    router.get("/");
    router.put("/:id");
    router.delete("/:id");
    app.use('/api/patients', router);
}