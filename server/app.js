const express = require('express');
const app = express();
const auth =  require('./routes/auth');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// app.get('/', (req, res) => {
//     // res.send('Holla');
//     res.status(200).json({
//         name: 'Bob'
//     })
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', auth)

module.exports = app;