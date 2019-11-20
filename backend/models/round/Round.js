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
  mainCombination: {
    type: Array,
    required: true,
    default: [],
  },
  topCombination: {
    type: Array,
    required: true,
    default: [],
  },
  bottomCombination: {
    type: Array,
    required: true,
    default: [],
  },
  won: {
    type: Boolean,
    required: true,
  },
  playedOn: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;
