const { Card } = require('../models/card');

async function createCard(req, res) {
  const { name, link } = req.body;
  const ownerId = req.user._id;
  const card = await Card.create({ name, link, owner: ownerId });
  res.send(card);
}

module.exports = { createCard };
