const functions = require('firebase-functions');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/routes', routes);

module.exports = functions.https.onRequest(app);
