const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function createUser(req, res) {
  try {
    const {
      email, password, name, about, avatar,
    } = req.body;
    const user = await User.create({
      email, password, name, about, avatar,
    });
    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { createUser };
