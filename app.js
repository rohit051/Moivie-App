let express = require('express');
let app = express();
let appService = require('./app.service');

// appService.setAppMiddleware(app);
appService.apiSetUp(app);

module.exports = app;