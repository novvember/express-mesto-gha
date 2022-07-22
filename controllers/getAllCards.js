const { Card } = require('../models/card');

async function getAllCards(req, res) {
  const cards = await Card.find({});
  res.send(cards);
}

module.exports = { getAllCards };
