const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  gameId: { type: String, required: true },
  board: { type: Array, required: true },
}).index({ gameId: 1 }, { unique: true });

module.exports = mongoose.model('game', schema);
