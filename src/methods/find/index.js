const { findOne } = require('../../model');
const schema = require('./validator');

const FindGameMethod = async (parameters) => {
  const { value, error } = schema.validate(parameters);

  if (error) {
    return { error: error.details[0].message };
  }

  const { gameId } = value;

  try {
    const game = await findOne({ gameId });

    return game;
  } catch (err) {
    return err;
  }
};

module.exports = FindGameMethod;
