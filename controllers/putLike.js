const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function putLike(req, res) {
  try {
    const userId = req.user._id;
    const card = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
      { new: true },
    );

    if (!card) {
      const error = new Error('Карточка не найдена');
      error.name = 'NotFoundError';
      throw error;
    }

    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { putLike };
