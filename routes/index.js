const express = require('express');
const { celebrate, Joi } = require('celebrate');

const { users } = require('./users');
const { cards } = require('./cards');
const { login } = require('../controllers/login');
const { createUser } = require('../controllers/createUser');
const { auth } = require('../middlewares/auth');
const { NotFoundError } = require('../errors/NotFoundError');

const routes = express.Router();

routes.post('*', express.json());

routes.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(2),
    }),
  }),
  createUser,
);

routes.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(2),
    }),
  }),
  login,
);

routes.all('*', auth);

routes.use('/users', users);
routes.use('/cards', cards);

routes.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'));
});

module.exports = { routes };
