let mongoose = require('mongoose'),
  Schema = mongoose.Schema

let SchoolSchema = new Schema({
  name: String,
})

let School = mongoose.model('School', SchoolSchema)

module.exports = School
