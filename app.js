//Imports
const express = require('express');
const db = require('./lib/db');
const config = require('config');
const glob = require('glob');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const socket = require('./lib/socket');
const socketIO = require("socket.io");


app.use(bodyParser.json({strict: true}));

function loadRoutes() {
  glob.sync('./routes/*.js').forEach(function(file) {
    app.use( '/', require(path.resolve(file)));
  });
  handle404Error();
}

function loadModels() {
  glob.sync('./models/**/*.js').forEach(function(file) {
    require(path.resolve(file));
  });
}

function handle404Error() {
  app.use(function(req, res) {
    res.status(404).json({
      success: false,
      message: 'The requested end point does not exist',
    });
  });
}

function startServer() {
  http.listen(config.get('api.port'));
  console.log(`server started on ${config.get('api.port')}`)
}

async function initialize() {
    if (app.isAppInitialized) {
      return;
    }

    socket.setupSocket(http);
    console.log({ description: 'Socket started' });

    await db.connect();
    console.log({ description: 'Connected to database.' });
  
    await loadModels();
    console.log({ description: 'All models loaded' });
  
    await loadRoutes();
    console.log({ description: 'All routes loaded' });
  
    await startServer();
    app.isAppInitialized = true;

  }
  
  app.initialize = initialize;
  
  module.exports = app;
  