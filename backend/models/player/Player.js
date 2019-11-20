const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastGameOn: {
    type: Date,
    default: null,
    required: false,
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
