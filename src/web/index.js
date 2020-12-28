const express = require('express');
const mongoose = require('mongoose');

const { DB_URL, PORT } = require('../config');
const middlewares = require('./middlewares');
const routes = require('./routes');

const url = DB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const app = express();

middlewares.beforeHandler.forEach((_) => _(app));

app.get('/health', routes.healthCheck);

app.get('/game/:gameId', routes.game.findOne);
app.post('/game', routes.game.create);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on ${PORT}, pid = ${process.pid}`);
});

module.exports = app;
