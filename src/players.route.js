const {Router} = require('express');
const playersStorage = require('./players.storage');

const playersRoute = Router();

playersRoute.get('/', async (req, res) => res.json(await playersStorage.getAll()));

playersRoute.get('/:id', async (req, res) => {
  let id = req.params.id;
  const player = await playersStorage.getById(id);

  if (!player) {
    return res.status(404).send(`Player with id "${id}" do not exists.`);
  }

  res.json(player);
});

playersRoute.delete('/:id', async (req, res) => {
  const deleted = await playersStorage.deleteById(req.params.id);
  const status = deleted ? 204 : 404;
  res.sendStatus(status);
});

module.exports = playersRoute;
