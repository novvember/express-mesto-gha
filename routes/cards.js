const express = require('express');
const { getAllCards } = require('../controllers/getAllCards');
const { getCard } = require('../controllers/getCard');
const { createCard } = require('../controllers/createCard');
const { putLike } = require('../controllers/putLike');
const { deleteLike } = require('../controllers/deleteLike');

const cards = express.Router();

cards.get('/', getAllCards);
cards.get('/:cardId', getCard);
cards.post('/', express.json(), createCard);
cards.put('/:cardId/likes', putLike);
cards.delete('/:cardId/likes', deleteLike);

module.exports = { cards };
