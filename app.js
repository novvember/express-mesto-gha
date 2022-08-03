const express = require('express');
const mongoose = require('mongoose');
const { routes } = require('./routes');
const { handleError } = require('./middlewares/handleError');

const { PORT = 3000 } = process.env;
const DATABASE_URL = 'mongodb://127.0.0.1:27017/mestodb';

const app = express();

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(`Connected to database on ${DATABASE_URL}`);
  })
  .catch((err) => {
    console.log('Error on database connection');
    console.error(err);
  });

app.use(routes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
