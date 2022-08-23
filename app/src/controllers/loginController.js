const User = require("../models/User");

const loginController = {
  output: (req, res) => {
    res.render("home/login");
  },
  process: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
};

module.exports = loginController;
