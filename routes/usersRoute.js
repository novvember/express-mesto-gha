const express = require('express');
const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { createUser } = require('../controllers/createUser');
const { updateUser } = require('../controllers/updateUser');

const usersRoute = express.Router();

usersRoute.get('/', getAllUsers);
usersRoute.get('/:userId', getUser);
usersRoute.post('/', express.json(), createUser);
usersRoute.patch('/me', express.json(), updateUser);
// usersRoute.post('/me/avatar', express.json(), updateAvatar);

module.exports = { usersRoute };
