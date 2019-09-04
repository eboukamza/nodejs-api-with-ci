const {Router} = require('express');

const playersRoute = Router();

playersRoute.get('/', (req, res) => {
  res.send('Hi poc!');
});

module.exports = playersRoute;
