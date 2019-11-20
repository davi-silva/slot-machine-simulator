const express = require('express');

const app = express();
const cors = require('cors');
const uuidv4 = require('uuid/v4');

app.use(cors());

// Load Podcast model
const Game = require('../models/game/Game');

// Get All Rounds
app.get('/', (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination, 10) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const playerList = [];
  Player.find()
    .skip((page - 1) * pagination)
    .limit(pagination)
    .then((rounds) => {
      rounds.map((player) => {
        playerList.push({
          id: player.id,
          name: player.name,
          mainCombination: player.mainCombination,
          createdOn: player.createdOn,
          lastGameOn: player.lastGameOn,
        });
      });
      res.status(302).send(playerList);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('Getting all players...');
});


// Create New Player
app.post('/play', (req, res) => {
  const {
    name,
  } = req.body;
  const errors = [];
  if (name === '') {
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
    const createdOn = Date.now();
    const lastGameOn = null;
    const newGame = new Game({
      id,
      name,
      createdOn,
      lastGameOn
    });
    newGame
      .save()
      .then(() => {
        res.status(201).send({
          id,
          name,
          createdOn,
          lastGameOn
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
