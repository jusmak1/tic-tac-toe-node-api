const { FindGameMethod } = require('../../../../methods');
const serializer = require('./serializer');

const findOne = async (req, res) => {
  const result = await FindGameMethod(req.params);

  if (!result || result.error) {
    res.status(400).json(result);
  } else {
    const serialized = serializer({ entity: result });
    res.status(200).json(serialized);
  }
};

module.exports = findOne;
