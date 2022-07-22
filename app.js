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

app.use(routes);

app.listen(PORT, () => {
  console.log('App started.');
});
