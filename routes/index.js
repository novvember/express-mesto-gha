const express = require('express');
const { users } = require('./users');
const { cards } = require('./cards');

const routes = express.Router();

routes.use('/users', users);
routes.use('/cards', cards);

module.exports = { routes };
