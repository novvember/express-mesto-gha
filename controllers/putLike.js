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
    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { putLike };
