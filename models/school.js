const mongoose = require('mongoose')

let Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name: String,
  students: [{
      type: Schema.Types.ObjectId,
      ref: 'Person'
    }],
  teams: [{
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }],
  judges: [{
      type: Schema.Types.ObjectId,
      ref: 'Person'
    }]
})

const School = mongoose.model('School', SchoolSchema)

module.exports = School
