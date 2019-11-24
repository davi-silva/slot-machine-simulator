const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  topCombination: {
    type: Array,
    required: true,
    default: [],
  },
  mainCombination: {
    type: Array,
    required: true,
    default: [],
  },
  bottomCombination: {
    type: Array,
    required: true,
    default: [],
  },
  playedOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;
