const { User } = require('../models/user');

async function createUser(req, res) {
  console.log('creating user');
  const { name, about, avatar } = req.body;
  console.log({ name, about, avatar });
  const user = await User.create({ name, about, avatar });
  res.send(user);
}

module.exports = { createUser };
