const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function getCard(req, res) {
  try {
    const { cardId } = req.params;
    const card = await Card.findById(cardId);
    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getCard };
