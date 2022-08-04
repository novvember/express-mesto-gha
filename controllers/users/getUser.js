const { User } = require('../../models/user');
const { NotFoundError, ValidationError } = require('../../errors');

async function getUser(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError('Пользователь не найден');
    }

    res.send(user);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new ValidationError(`Неверные данные в  ${err.path}`));
      return;
    }
    next(err);
  }
}

module.exports = { getUser };
