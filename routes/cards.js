const express = require('express');
const { celebrate, Joi } = require('celebrate');

const { getAllCards } = require('../controllers/getAllCards');
const { createCard } = require('../controllers/createCard');
const { deleteCard } = require('../controllers/deleteCard');
const { putLike } = require('../controllers/putLike');
const { deleteLike } = require('../controllers/deleteLike');

const cards = express.Router();

cards.get('/', getAllCards);

cards.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().regex(/https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+#?$/i),
    }),
  }),
  createCard,
);

cards.delete(
  '/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().length(24),
    }),
  }),
  deleteCard,
);

cards.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().length(24),
    }),
  }),
  putLike,
);

cards.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().length(24),
    }),
  }),
  deleteLike,
);

module.exports = { cards };
