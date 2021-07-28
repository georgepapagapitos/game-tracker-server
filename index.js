const express = require('express');
const app = express();
const cors = require('cors');
const { PORT, DB_CONNECTION_URL } = require('./utils/config.js');

app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');
const gameRoute = require('./routes/game.router');

mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('connected to mongo db'))
  .catch(err => {
    console.error(err);
  });

app.use('/api/games', gameRoute);

app.listen(PORT, () => {
  console.log('server running on port', PORT)
});
