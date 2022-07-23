const { User } = require('../models/user');
const { handleError } = require('../utils/handleError');

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getAllUsers };
