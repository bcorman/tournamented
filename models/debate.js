const mongoose = require('mongoose')

let Schema = mongoose.Schema;

const DebateSchema = new Schema({
  teams: {
      prop: {
          type: Schema.Types.ObjectId,
          ref: 'Team'
          },
      opp: {
          type: Schema.Types.ObjectId,
          ref: 'Team'
          }
    },
  judge: {
      type: Schema.Types.ObjectId,
      ref: 'Person'
    },
  room: String
})

const Debate = mongoose.model('Debate', DebateSchema)

module.exports = Debate
