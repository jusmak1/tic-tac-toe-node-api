const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = {
  beforeHandler: [
    (app) => app.use(bodyParser.json({ limit: '10mb' })),
    (app) => app.use(cors()),
  ],
};
