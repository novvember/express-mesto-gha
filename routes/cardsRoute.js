const express = require('express');
const { getAllCards } = require('../controllers/getAllCards');
const { getCard } = require('../controllers/getCard');
const { createCard } = require('../controllers/createCard');
const { putLike } = require('../controllers/putLike');
const { deleteLike } = require('../controllers/deleteLike');

const cardsRoute = express.Router();

cardsRoute.get('/', getAllCards);
cardsRoute.get('/:cardId', getCard);
cardsRoute.post('/', express.json(), createCard);
cardsRoute.put('/:cardId/likes', putLike);
cardsRoute.delete('/:cardId/likes', deleteLike);

module.exports = { cardsRoute };
