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
      link: Joi.string().required().min(2),
    }),
  }),
  createCard,
);

cards.delete('/:cardId', deleteCard);
cards.put('/:cardId/likes', putLike);
cards.delete('/:cardId/likes', deleteLike);

module.exports = { cards };
