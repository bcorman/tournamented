/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express and bodyParser
const express = require('express'),
  bodyParser = require('body-parser')

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'))

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }))

// tell server to look at index.js
const db = require('./models')

// define a root route: localhost:3000/
app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname})
})

//Get controllers
const controllers = require('./controllers')

                        //Routes Routes Routes
app.get('/api', controllers.api.index)

//School
app.get('/api/schools', controllers.school.index)
app.get('/api/schools/:id', controllers.school.show)
app.post('/api/schools', controllers.school.create)
//Person
app.get('/api/persons', controllers.person.index)
app.get('/api/persons/:id', controllers.person.show)
app.post('/api/person', controllers.person.create)
//Team
app.get('/api/teams', controllers.team.index)
app.get('/api/teams/:id', controllers.team.show)
app.post('/api/teams', controllers.team.create)
//Debate
app.get('/api/debates', controllers.person.index)
app.get('/api/debates/:id', controllers.person.show)
app.post('/api/debates', controllers.debate.create)


//listen to port 3000. Log success to console.
app.listen(process.env.PORT || 3000, () => {
  console.log('Tournamented listening at http://localhost:3000/')
})
