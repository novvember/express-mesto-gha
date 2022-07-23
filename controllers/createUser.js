const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function createUser(req, res) {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { createUser };
