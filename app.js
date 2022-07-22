const express = require('express');
const mongoose = require('mongoose');
const { routes } = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    console.log('Database connected.');
  })
  .catch((err) => {
    console.log('Error on database connection');
    console.error(err);
  });

// временное решение авторизации пользователя
app.use((req, res, next) => {
  req.user = {
    _id: '62daed4f328e7939e76c5115',
  };

  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log('App started.');
});
