const express = require('express');
const { handleError } = require('../utils/handleError');
const { users } = require('./users');
const { cards } = require('./cards');
const { login } = require('../controllers/login');
const { createUser } = require('../controllers/createUser');

const routes = express.Router();

routes.post('/signup', express.json(), createUser);
routes.post('/signin', express.json(), login);

routes.use('/users', users);
routes.use('/cards', cards);

routes.all('*', (req, res) => {
  const err = new Error('Неверный адрес запроса');
  err.name = 'NotFoundError';
  handleError(err, req, res);
});

module.exports = { routes };
