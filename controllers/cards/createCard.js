const { Card } = require('../../models/card');
const { ValidationError } = require('../../errors');

async function createCard(req, res, next) {
  try {
    const { name, link } = req.body;
    const ownerId = req.user._id;
    const card = await Card.create({ name, link, owner: ownerId });
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new ValidationError(`Неверные данные в  ${err.path}`));
      return;
    }

    next(err);
  }
}

module.exports = { createCard };
