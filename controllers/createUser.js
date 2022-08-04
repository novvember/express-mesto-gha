const bcrypt = require('bcryptjs');
const { User } = require('../models/user');
const { ConflictError } = require('../errors/ConflictError');

const SALT_LENGTH = 10;

async function createUser(req, res, next) {
  try {
    const { email, password, name, about, avatar } = req.body;
    const passwordHash = await bcrypt.hash(password, SALT_LENGTH);

    let user;

    try {
      user = await User.create({
        email,
        password: passwordHash,
        name,
        about,
        avatar,
      });
    } catch (err) {
      throw new ConflictError('Пользователь с таким email уже существует');
    }

    user = user.toObject();
    delete user.password;
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { createUser };
