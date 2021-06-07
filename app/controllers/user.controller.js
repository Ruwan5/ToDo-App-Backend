const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
    console.log("done");
    console.log(req.body);

    //create user
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.create(user).then(data=>{
        res.send(true);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the user."
        });
    });

};


// login user
exports.findOne = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    console.log("login")
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;


    User.findOne({where: condition})
    .then(data => {

        if(password == data.password){
            res.send(data);
        }
        else{
            res.send(false);
        }

    })
    .catch(err => {
        res.status(400).send({
            message:
                err.message || "This is not registered email address"
        })
    })


};
