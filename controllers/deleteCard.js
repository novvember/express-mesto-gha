const mongoose = require('mongoose');
const { Card } = require('../models/card');
const { NotFoundError } = require('../errors/NotFoundError');
const { UnauthorizedError } = require('../errors/UnauthorizedError');

async function deleteCard(req, res, next) {
  try {
    const { cardId } = req.params;

    let card = mongoose.Types.ObjectId.isValid(cardId);

    if (card) {
      card = await Card.findById(cardId).populate('owner');
    }

    if (!card) {
      throw new NotFoundError('Карточка не найдена');
    }

    const ownerId = card.owner.id;
    const userId = req.user._id;

    if (ownerId !== userId) {
      throw new UnauthorizedError('Удалить можно только свою карточку');
    }

    await Card.findByIdAndRemove(cardId);

    res.send(card);
  } catch (err) {
    next(err);
  }
}

module.exports = { deleteCard };
