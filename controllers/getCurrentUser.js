const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function getCurrentUser(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      const error = new Error('Пользователь не найден');
      error.name = 'NotFoundError';
      throw error;
    }

    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getCurrentUser };
