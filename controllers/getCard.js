const { Card } = require('../models/card');

async function getCard(req, res) {
  const { cardId } = req.params;
  const card = await Card.findById(cardId);
  res.send(card);
}

module.exports = { getCard };
