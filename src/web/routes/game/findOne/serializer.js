const serializer = ({ entity }) => {
  if (!entity) {
    return null;
  }

  const data = entity;

  const result = {
    gameId: data.gameId,
    board: data.board,
  };

  return result;
};

module.exports = serializer;
