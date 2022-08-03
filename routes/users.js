const express = require('express');

const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { updateUser } = require('../controllers/updateUser');
const { updateAvatar } = require('../controllers/updateAvatar');
const { getCurrentUser } = require('../controllers/getCurrentUser');

const users = express.Router();

users.get('/', getAllUsers);
users.get('/me', getCurrentUser);
users.get('/:userId', getUser);
users.patch('/me', updateUser);
users.patch('/me/avatar', updateAvatar);

module.exports = { users };
