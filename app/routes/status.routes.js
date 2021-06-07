module.exports = app => {
    const status = require("../controllers/status.controller");
    var router = require("express").Router();


    // Retrieve a all status
    router.get("/allstatus", status.findAll);

    app.use('/api', router);
  };