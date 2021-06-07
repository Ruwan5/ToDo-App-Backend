const db = require("../models");
const Status = db.status;
const Op = db.Sequelize.Op;


// Retrieve all Todos accoding to user id.
exports.findAll = (req, res) => {

    Status.findAll()
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving status."
        });
    });
};
