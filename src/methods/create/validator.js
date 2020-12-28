const joi = require('joi');

const schema = joi.object({
  gameId: joi.string().guid().required(),
  board: joi.array().required(),
});

module.exports = schema;
