const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function getUser(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getUser };
