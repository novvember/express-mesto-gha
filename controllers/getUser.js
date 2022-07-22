const { User } = require('../models/user');

async function getUser(req, res) {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.send(user);
}

module.exports = { getUser };
