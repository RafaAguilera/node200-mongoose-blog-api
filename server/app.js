const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const blogs = require('./routes/blogs');
require('dotenv').config()

const app = express();

app.use(bodyParser.json())
app.use('/api/users', users);
app.use('/api/blogs', blogs);

mongoose.connect(`mongodb+srv://Rafael:${process.env.MONGO_ATLAS}@cluster0.pcxvxfa.mongodb.net/?retryWrites=true&w=majority`);
mongoose.Promise = Promise;

app.get('/', (req, res) => {
  res.status(200).send('Server is running. Use postman to access Blog API.');
});

module.exports = app;