module.exports = app => {

  const users = require("../controllers/user.controller");
  var router = require("express").Router();

  // register new user
  router.post("/register", users.create);

  router.post("/login", users.findOne);


  app.use('/api', router);



  };