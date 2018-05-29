const mongoose = require('mongoose')

let Schema = mongoose.Schema

const TeamSchema = new Schema({
  name: String,
  wins: Number,
  debates: [{
       type: Schema.Types.ObjectId,
       ref: 'Debate'
     }],
  school: {
      type: Schema.Types.ObjectId,
      ref: 'School'
    }
})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team
