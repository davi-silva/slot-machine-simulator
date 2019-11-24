const express = require('express');

const app = express();
const cors = require('cors');
const uuidv4 = require('uuid/v4');

app.use(cors());

// Load Podcast model
const Game = require('../models/game/Game');

// Get All Game
app.get('/', (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination, 10) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  let gamesList = [];
  Game.find()
    // .skip((page - 1) * pagination)
    // .limit(pagination)
    .populate('playerInfo')
    .then((games) => {
      console.log('games:', games);
      games.map((game) => {
        gamesList.push({
          id: game.id,
          playerInfo: game.playerInfo._id,
          rounds: game.rounds,
          totalBalance: game.totalBalance,
          playedOn: game.playedOn,
        });
      });
      gamesList = gamesList.reverse();
      const reversedGamesList = gamesList.reverse();
      console.log('reversed gamesList:', reversedGamesList);
      res.status(302).send(gamesList);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('Getting all players...');
});

// Create New Game
app.post('/play', (req, res) => {
  const {
    playerInfo,
    rounds,
    totalBalance,
  } = req.body;
  const errors = [];

  if (errors.length > 0) {
    console.log('Errors:', errors);
    res.json({
      error: errors,
    });
  } else {
    const id = uuidv4();
    const playedOn = Date.now();
    const newGame = new Game({
      id,
      playerInfo,
      rounds,
      totalBalance,
      playedOn,
    });
    newGame
      .save()
      .then(() => {
        res.status(201).send({
          id,
          playerInfo,
          rounds,
          totalBalance,
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
