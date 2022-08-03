const express = require('express');
const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { updateUser } = require('../controllers/updateUser');
const { updateAvatar } = require('../controllers/updateAvatar');

const users = express.Router();

users.get('/', getAllUsers);
users.get('/:userId', getUser);
users.patch('/me', express.json(), updateUser);
users.patch('/me/avatar', express.json(), updateAvatar);

module.exports = { users };
