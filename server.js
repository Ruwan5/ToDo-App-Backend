const express = require("express");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "http://localhost:4200"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo server" });
});

require("./app/routes/user.routes")(app);
require("./app/routes/todo.routes")(app);
require("./app/routes/status.routes")(app);
require("./app/routes/category.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});