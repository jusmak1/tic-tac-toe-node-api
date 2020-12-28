const { CreateGameMethod } = require('../../../../methods');

const create = async (req, res) => {
  const result = await CreateGameMethod(req.body);

  if (!result) {
    res.status(400).json(result);
  } else res.status(200).json({ result });
};

module.exports = create;
