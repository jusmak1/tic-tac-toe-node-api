const GameModel = require('../schema');

const findOne = async ({ gameId }) => {
  if (!gameId) {
    return null;
  }

  const game = await GameModel.findOne({ gameId });

  return game;
};

module.exports = findOne;
