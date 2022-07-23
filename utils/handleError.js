function handleError(err, req, res) {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    res.status(400).send({
      message: 'Переданы некорректные данные',
    });
    return;
  }

  if (err.name === 'NotFoundError') {
    res.status(404).send({
      message: err.message,
    });
    return;
  }

  res.status(500).send({
    message: 'Не получилось обработать запрос',
  });
}

module.exports = { handleError };
