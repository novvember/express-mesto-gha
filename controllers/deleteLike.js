const { Card } = require('../models/card');

async function deleteLike(req, res) {
  const userId = req.user._id;
  const card = await Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: userId } }, // убрать _id из массива, если он есть
    { new: true },
  );
  res.send(card);
}

module.exports = { deleteLike };
