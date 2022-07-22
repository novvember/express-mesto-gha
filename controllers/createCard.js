const { Card } = require('../models/card');

async function createCard(req, res) {
  const { name, link } = req.body;
  const owner = req.user;
  const card = await Card.create({ name, link, owner });
  res.send(card);
}

module.exports = { createCard };
