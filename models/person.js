const mongoose = require('mongoose')

let Schema = mongoose.Schema;

const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  isJudge: Boolean,
  team: {
       type: Schema.Types.ObjectId,
       ref: 'Team'
     },
  score: Number,
  affiliation: {
       type: Schema.Types.ObjectId,
       ref: 'School'
     }
})

const Person = mongoose.model('Person', PersonSchema)

module.exports = Person
