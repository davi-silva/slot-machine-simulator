const express = require('express');

const app = express();
const cors = require('cors');
const uuidv4 = require('uuid/v4');

app.use(cors());

// Load Podcast model
const Round = require('../models/round/Round');

// Get All Rounds
app.get('/', (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination, 10) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const roundsList = [];
  Round.find()
    .populate('player')
    .skip((page - 1) * pagination)
    .limit(pagination)
    .then((rounds) => {
      rounds.map((round) => {
        roundsList.push({
          id: round.id,
          player: round.player,
          mainCombination: round.mainCombination,
          topCombination: round.topCombination,
          bottomCombination: round.bottomCombination,
          won: round.won,
          playedOn: round.playedOn,
        });
      });
      res.status(302).send(roundsList);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('Getting all rounds...');
});

// Get all round by Player
app.get('/all/player/:player', (req, res) => {
  const { player } = req.params;
  const roundsList = [];
  Round.find({
    player: [
      player,
    ],
  })
    .populate('player')
    .then((rounds) => {
      console.log('rounds.length:', rounds.length);
      rounds.map((round) => {
        console.log('round.player.name:', round.player.name);
        // if (round.player.name === player) {
        roundsList.push({
          id: round.id,
          player: round.player,
          topCombination: round.topCombination,
          mainCombination: round.mainCombination,
          bottomCombination: round.bottomCombination,
          playedOn: round.playedOn,
        });
        // }
      });
      res.status(302).send(roundsList);
    })
    .catch((err) => {
      res.json({
        err,
      });
    });
});

// Get Podcast by id
app.get('/:id', (req, res) => {
  const { id } = req.params;
  Round.findOne({
    id,
  })
    .populate('player')
    .then((round) => {
      res.status(302).send({
        id: round.id,
        player: round.player,
        mainCombination: round.mainCombination,
        topCombination: round.topCombination,
        bottomCombination: round.bottomCombination,
        won: round.won,
        playedOn: round.playedOn,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

// Play Round
app.post('/play', (req, res) => {
  const {
    player,
    topCombination,
    mainCombination,
    bottomCombination,
  } = req.body;
  const errors = [];
  if (!player
    || topCombination.length === 0
    || mainCombination.lenth === 0
    || bottomCombination.length === 0) {
    errors.push({
      errorMsg: 'Please enter all fields.',
    });
  }

  console.log('errors.length:', errors.length);

  if (errors.length > 0) {
    console.log('Errors:', errors);
    res.json({
      error: errors,
    });
  } else {
    const id = uuidv4();
    const playedOn = Date.now();
    const newRound = new Round({
      id,
      player,
      topCombination,
      mainCombination,
      bottomCombination,
      playedOn,
    });
    newRound
      .save()
      .then(() => {
        res.status(201).send({
          id,
          player,
          topCombination,
          mainCombination,
          bottomCombination,
          playedOn,
        });
      })
      .catch((err) => {
        res.json({
          errorMsg: err,
        });
      });
  }
});

module.exports = app;
