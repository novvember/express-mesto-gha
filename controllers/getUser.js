const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function getUser(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      const error = new Error('Пользователь не найден');
      error.name = 'NotFoundError';
    }

    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getUser };
