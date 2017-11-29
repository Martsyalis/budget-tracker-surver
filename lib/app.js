const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(bodyParser.json());

const categories = require('./routes/categories');

app.use('/api/categories', categories);
app.use( errorHandler());

module.exports = app;