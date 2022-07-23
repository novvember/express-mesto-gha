function handleError(err, req, res) {
  console.log(err.name);

  if (err.name === 'ValidationError') {
    res.status(400).send({
      message: 'Переданы некорректные данные',
    });
    return;
  }

  if (err.name === 'CastError' && err.name === 'NotFoundError') {
    res.status(404).send({
      message: 'Объект не найден',
    });
    return;
  }

  res.status(500).send({
    message: 'Не получилось обработать запрос',
  });
}

module.exports = { handleError };
