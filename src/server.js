const express = require('express');
const bodyParser = require('body-parser');

const playersRoute = require('./players.route');

const app = express();
app.use(bodyParser.json());

app.use('/players', playersRoute);

module.exports = app;
