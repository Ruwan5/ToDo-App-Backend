module.exports = (sequelize, Sequelize) => {
    const ToDo = sequelize.define("todo", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      duedate: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      }
    });

    return ToDo;
};