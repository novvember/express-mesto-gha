const { User } = require('../models/user');

async function updateAvatar(req, res) {
  const userId = req.user._id;
  const { avatar } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { avatar },
    { new: true },
  );
  res.send(user);
}

module.exports = { updateAvatar };
