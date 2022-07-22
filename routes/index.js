const express = require('express');
const { usersRoute } = require('./usersRoute');
const { cardsRoute } = require('./cardsRoute');

const routes = express.Router();

routes.use('/users', usersRoute);
routes.use('/cards', cardsRoute);

module.exports = { routes };
