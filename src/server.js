const express = require('express');

const playersRoute = require('./players.route');

const app = express();

app.use('/players', playersRoute);

module.exports = app;
