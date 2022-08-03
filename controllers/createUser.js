const bcrypt = require('bcryptjs');
const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

const SALT_LENGTH = 10;

async function createUser(req, res) {
  try {
    const { email, password, name, about, avatar } = req.body;
    const passwordHash = await bcrypt.hash(password, SALT_LENGTH);
    let user = await User.create({
      email,
      password: passwordHash,
      name,
      about,
      avatar,
    });
    user = user.toObject();
    delete user.password
    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { createUser };
