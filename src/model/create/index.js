const GameModel = require('../schema');

const create = async ({ gameId, board }) => {
  const result = await GameModel.updateMany(
    { gameId },
    { $addToSet: { board: [board] } },
    { upsert: true },
  );

  if (result.n === 1) {
    return 'updated';
  }

  return {};
};

module.exports = create;
