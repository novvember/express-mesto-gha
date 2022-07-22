const express = require('express');
const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { createUser } = require('../controllers/createUser');

const usersRoute = express.Router();

usersRoute.get('/', getAllUsers);
usersRoute.get('/:userId', getUser);
usersRoute.post('/', express.json(), createUser);

module.exports = { usersRoute };
