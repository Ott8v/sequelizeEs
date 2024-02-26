module.exports = (app) => {
    let router = require("express").Router();
    router.get("/");
    app.use('/api/patients', router);
}