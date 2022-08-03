const express = require('express');

const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { updateUser } = require('../controllers/updateUser');
const { updateAvatar } = require('../controllers/updateAvatar');
const { getCurrentUser } = require('../controllers/getCurrentUser');

const users = express.Router();

users.get('/', getAllUsers);
users.get('/:userId', getUser);
users.get('/me', getCurrentUser);
users.patch('/me', updateUser);
users.patch('/me/avatar', updateAvatar);

module.exports = { users };
