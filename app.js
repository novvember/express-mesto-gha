const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

app.get('/', () => {
  console.log('get request recieved!');
});

app.listen(PORT);
