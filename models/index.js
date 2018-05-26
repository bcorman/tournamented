var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tournamented");


module.exports = {
  School: require('./school.js'),
  Debate: require('./debate.js'),
  Team: require('./team.js'),
  Person: require('./person.js')
}
