const jwt = require('jsonwebtoken');
const {handleError} = require('../utils/handleError');

function auth (req, res, next) {
  const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      const error = new Error('Для выполнения действия необходима авторизация');
      error.name = 'UnauthorizedError';
      handleError(error, req, res);
    }

    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(token, 'secretkey');
    } catch (err) {
      const error = new Error('Для выполнения действия необходима авторизация');
      error.name = 'UnauthorizedError';
      handleError(error, req, res);
    }

    req.user = payload;
    next();
}

module.exports = { auth };
