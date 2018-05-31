const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PersonSchema = new Schema({
  name: String,
  isJudge: Boolean,
  isAvailable: Boolean,
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
