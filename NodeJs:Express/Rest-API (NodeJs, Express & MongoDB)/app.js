const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/actorsbooking');
mongoose.Promise = global.Promise; 

//Middlewares
app.use(bodyParser.json()); 
app.use('/api', require('./routes/api'));
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// listen port

app.listen(process.env.port|| 4040, function(){
  console.log('listening requests');
});

