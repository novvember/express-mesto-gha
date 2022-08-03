const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      const error = new Error('Неверные данные для входа');
      error.name = 'UnauthorizedError';
      throw error;
    }

    const hasRightPassword = await bcrypt.compare(password, user.password);

    if (!hasRightPassword) {
      const error = new Error('Неверные данные для входа');
      error.name = 'UnauthorizedError';
      throw error;
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secretkey',
      {
        expiresIn: '7d',
      },
    );

    res.send({ jwt: token });
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { login };
