const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function getAllCards(req, res) {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { getAllCards };
