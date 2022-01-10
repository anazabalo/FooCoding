const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.json()); 
app.use('/api', require('./routes/api'));

// listen port

app.listen(process.env.port|| 4004, function(){
  console.log('listening requests port 4004');
});


