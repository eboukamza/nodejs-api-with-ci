const {players} = require('../data/headtohead');
// sort players
players.sort((a, b) => a.id - b.id);

/**
 * Get all players sorted by id
 * @returns {Promise<Array>} all players in the storage
 */
const getAll = async () => Promise.resolve(players);

/**
 * Get a player by id
 * @param id the player id to be retrieved
 * @returns {Promise<Object>} the player Object or undefined if do not exits
 */
const getById = async (id) => Promise.resolve(players.find(player => player.id.toString() === id));

/**
 * Remove a player from the storage
 * @param id the player id to be deleted
 * @returns {Promise<boolean>} true if deleted successfully or false if not founded
 */
const deleteById = async (id) => {
  const index = players.findIndex(player => player.id.toString() === id);
  const canDelete = index !== -1;
  if (canDelete) {
    players.splice(index, 1)
  }

  return Promise.resolve(canDelete);
};

module.exports = {getAll, getById, deleteById};
