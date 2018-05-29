let mongoose = require('mongoose'),
  Schema = mongoose.Schema

let SchoolSchema = new Schema({
  name: String,
  teams: [{
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }]
})

let School = mongoose.model('School', SchoolSchema)

module.exports = School
