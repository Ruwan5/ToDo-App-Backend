module.exports = app => {
    const category = require("../controllers/category.controller");
    var router = require("express").Router();

    router.get("/allcategories", category.findAll);

    app.use('/api', router);
  };