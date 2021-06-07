const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

// Create and Save new Todo
exports.create = (req, res) => {

    const todo = {
        title: req.body.title,
        description: req.body.description,
        duedate: req.body.duedate,
        status: req.body.status,
        category: req.body.category,
        user_id: req.body.user_id
    }

    Todo.create(todo).then(data=>{
        res.send(true);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the todo."
        });
    });

};

// Retrieve all Todos accoding to user id.
exports.findAll = (req, res) => {
    const user_id = req.params.user_id;
    var condition = user_id ? { user_id: { [Op.like]: `%${user_id}%` } } : null;

    // console.log(condition)
    Todo.findAll({where: condition})
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving todos."
        });
    });
};


// Update a ToDO by the id in the request
exports.update = (req, res) => {

    const id = parseInt(req.params.todo_id);
    console.log(req.body);
    console.log(id)
    Todo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating todo with"
        });
    });
};

exports.changeDueDate = (req, res) => {

    const id = parseInt(req.params.todo_id);
    console.log(req.body);
    console.log(id)
    Todo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating todo with"
        });
    });
}

exports.changeStatus = (req, res) => {

    const id = parseInt(req.params.todo_id);
    console.log(req.body);
    console.log(id)
    Todo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating todo with"
        });
    });
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = parseInt( req.params.todo_id);

    Todo.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send(true);
          } else {
            res.send(false);
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete todo "
          });
        });
};
