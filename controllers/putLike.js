const { Card } = require('../models/card');

async function putLike(req, res) {
  const userId = req.user._id;
  const card = await Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
    { new: true },
  );
  res.send(card);
}

module.exports = { putLike };
