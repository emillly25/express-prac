const User = require("../models/User");

const loginController = {
  output: (req, res) => {
    res.render("home/login");
  },
  process: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = loginController;
