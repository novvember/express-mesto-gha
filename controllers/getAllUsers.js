const { User } = require('../models/user');

async function getAllUsers(req, res) {
  const users = await User.find({});
  res.send(users);
}

module.exports = { getAllUsers };
