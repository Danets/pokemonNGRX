const express = require('express');

const auth =  require('./routes/auth');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// Connect with Mongo
const uri = require("./config/keys");
mongoose.connect(uri.mongoURI)
.then(() => console.log("Connected with MongoDB successfully!"))
.catch(err => console.log(err))

// Logger
app.use( require('morgan')('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors
app.use(require('cors')());

app.use('/api/auth', auth);

module.exports = app;