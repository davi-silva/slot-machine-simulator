const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const process = require('process');

const app = express();

require('dotenv').config();

// environment variables
process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = "staging";
// process.env.NODE_ENV = "testing".;
// process.env.NODE_ENV = "production";

// config variables
const config = require('./config/config.js');

app.use(cors());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Bodyparser
app.use(express.urlencoded({
    extended: false,
}))

app.use('/players', require('./routes/players'));
app.use('/games', require('./routes/games'));
app.use('/rounds', require('./routes/rounds'));  

const { connection } = mongoose;
connection.once('open', () => {
    console.log('MongoDB Atlas database connection established successfully.');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${global.gConfig.app_name} is listening on port: ${port}`);
})