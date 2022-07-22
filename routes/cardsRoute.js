const express = require('express');
const { getAllCards } = require('../controllers/getAllCards');
const { getCard } = require('../controllers/getCard');
const { createCard } = require('../controllers/createCard');

const cardsRoute = express.Router();

cardsRoute.get('/', getAllCards);
cardsRoute.get('/:cardId', getCard);
cardsRoute.post('/', express.json(), createCard);

module.exports = { cardsRoute };
