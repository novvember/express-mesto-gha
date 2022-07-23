const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function updateUser(req, res) {
  try {
    const userId = req.user._id;
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { name, about },
      { new: true },
    );
    res.send(user);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { updateUser };
