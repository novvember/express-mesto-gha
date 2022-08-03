const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function deleteCard(req, res) {
  try {
    const { cardId } = req.params;

    const card = await Card.findById(cardId).populate('owner');

    if (!card) {
      const error = new Error('Карточка не найдена');
      error.name = 'NotFoundError';
      throw error;
    }

    const ownerId = card.owner.id;
    const userId = req.user._id;

    if (ownerId !== userId) {
      const error = new Error('Удалить можно только свою карточку');
      error.name = 'UnauthorizedError';
      throw error;
    }

    await Card.findByIdAndRemove(cardId);

    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { deleteCard };
