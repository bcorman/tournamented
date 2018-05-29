let mongoose = require('mongoose'),
  Schema = mongoose.Schema

let SchoolSchema = new Schema({
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

let School = mongoose.model('School', SchoolSchema)

module.exports = School
