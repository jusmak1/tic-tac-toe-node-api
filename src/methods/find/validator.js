const joi = require('joi');

const schema = joi.object({
  gameId: joi.string().guid().required(),
});

module.exports = schema;
