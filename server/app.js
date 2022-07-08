const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const blogs = require('./routes/blogs');
// require('dotenv').config()


// mongoose.connect('mongodb://localhost/myblog');

// mongodb+srv://Rafael:<password>@cluster0.2asfupf.mongodb.net/?retryWrites=true&w=majority



const app = express();

app.use(bodyParser.json())
app.use('/api/users', users);
app.use('/api/blogs', blogs);

mongoose.connect('mongodb+srv://Rafael:Audi2004@cluster0.pcxvxfa.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = Promise;

// mongoose.connect(`mongodb+srv://alexkmartinez77:${process.env.mongoDBAtlas}@sdcsblogapi.j9ckx.mongodb.net/scsblogapi?retryWrites=true`);


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Rafael:Audi2004@cluster0.2asfupf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose.Promise = Promise;



app.get('/', (req, res) => {
  res.status(200).send('Server is running. Use postman to access Blog API.');
});

module.exports = app;