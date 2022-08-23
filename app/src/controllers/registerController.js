const User = require("../models/User");

const registerController = {
  output: (req, res) => {
    res.render("home/register");
  },
  process: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = registerController;
