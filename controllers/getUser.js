const { User } = require('../models/user');
const { NotFoundError } = require('../errors/NotFoundError');

async function getUser(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError('Пользователь не найден');
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { getUser };
