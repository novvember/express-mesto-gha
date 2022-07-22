const express = require('express');
const { usersRoute } = require('./usersRoute');

const routes = express.Router();

routes.use('/users', usersRoute);

module.exports = { routes };
