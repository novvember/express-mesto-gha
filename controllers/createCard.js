const { Card } = require('../models/card');
const { handleError } = require('../utils/handleError');

async function createCard(req, res) {
  try {
    const { name, link } = req.body;
    const ownerId = req.user._id;
    const card = await Card.create({ name, link, owner: ownerId });
    res.send(card);
  } catch (err) {
    handleError(err, req, res);
  }
}

module.exports = { createCard };
