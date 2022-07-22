const { User } = require('../models/user');

async function createUser(req, res) {
  const { name, about, avatar } = req.body;
  const user = await User.create({ name, about, avatar });
  res.send(user);
}

module.exports = { createUser };
