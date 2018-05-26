/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express and bodyParser
const express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// tell server to look at index.js
const db = require('./models')

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

//Get controllers
var controllers = require('./controllers');


//listen to port 3000. Log success to console.
app.listen(process.env.PORT || 3000, function () {
  console.log('Tournamented listening at http://localhost:3000/');
});
