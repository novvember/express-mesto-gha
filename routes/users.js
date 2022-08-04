const express = require('express');
const { celebrate, Joi } = require('celebrate');

const { getAllUsers } = require('../controllers/getAllUsers');
const { getUser } = require('../controllers/getUser');
const { updateUser } = require('../controllers/updateUser');
const { updateAvatar } = require('../controllers/updateAvatar');
const { getCurrentUser } = require('../controllers/getCurrentUser');

const users = express.Router();

users.get('/', getAllUsers);
users.get('/me', getCurrentUser);

users.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().alphanum().length(24),
    }),
  }),
  getUser,
);

users.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  updateUser,
);

users.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().uri(),
    }),
  }),
  updateAvatar,
);

module.exports = { users };
