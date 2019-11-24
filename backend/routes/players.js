const express = require('express');

const app = express();
const cors = require('cors');
const uuidv4 = require('uuid/v4');

app.use(cors());

// Load Podcast model
const Player = require('../models/player/Player');

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
          _id: player._id,
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

// Check if Podcast slug is valid
app.get('/validation/name/:name', (req, res) => {
  const { name } = req.params;
  const playerNameList = [];
  Player.find({
    name,
  })
    .then((players) => {
      players.map((player) => {
        playerNameList.push({
          id: player.id,
          name: player.name,
          createdOn: player.createdOn,
          lastGameOn: player.lastGameOn,
        });
      });
      let valid = true;
      if (playerNameList.length > 0) {
        valid = false;
        res.json({
          valid,
        });
      } else if (playerNameList.length === 0) {
        res.json({
          valid,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create New Player
app.post('/create', (req, res) => {
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
    const newPlayer = new Player({
      id,
      name,
      createdOn,
      lastGameOn,
    });
    newPlayer
      .save()
      .then((player) => {
        res.status(201).send({
          _id: player._id,
          id,
          name,
          createdOn,
          lastGameOn,
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
