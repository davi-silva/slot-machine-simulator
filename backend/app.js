const express = require('express');
const cors = require('cors');
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${global.gConfig.app_name} is listening on port: ${port}`);
})