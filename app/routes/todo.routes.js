module.exports = app => {
    const todo = require("../controllers/todo.controller");
    var router = require("express").Router();

    //create a todo
    router.post("/savetodo", todo.create);

    // Retrieve all Tutorials
    router.get("/getalltodos/:user_id", todo.findAll);


    // Update a todo with id
    router.put("/complete/:todo_id", todo.update);

    // Update todo duedate
    router.put("/changedate/:todo_id", todo.changeDueDate);

    // Update todo status
    router.put("/changestatus/:todo_id", todo.changeStatus);

    // Delete a todo with id
    router.delete("/delete/:todo_id", todo.delete);


    app.use('/api', router);
  };