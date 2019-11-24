const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  playerInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  rounds: {
    type: Array,
    required: true,
    default: [],
  },
  totalBalance: {
    type: Number,
    required: true,
  },
  playedOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
