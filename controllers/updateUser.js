const { User } = require('../models/user');

async function updateUser(req, res) {
  const userId = req.user._id;
  const { name, about } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { name, about },
    { new: true },
  );
  res.send(user);
}

module.exports = { updateUser };
