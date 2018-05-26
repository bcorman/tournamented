// tell server to look at index.js
const express = require('express'),
bodyParser = require('body-parser');

//Get express
const app = express();

//Tell controller to look at database
const db = require('../models/')

/*CRUD Functions

Create - To Do
Read - Added
Update - To Do
Destroy - Added
*/

module.exports = {
  index: (req, res) => {
    //get all schools
    db.School.find({})
    //not currently sure if populate is necessary. Adding anyway.
      .populate('students')
      .populate('teams')
      .populate('judges')
      .exec((err, schools) => {
        if (err) { console.log(err) }
        console.log(`Schools Delivered`)
        res.json(schools)
      })
  },
  create: (req, res) => {
    console.log(`This function has yet to be written`)
  },
  show: (req, res) => {
    //get single school
    let id = req.body.id
    db.School.findById(id)
      //again, populate may be unnecessary
      .populate('students')
      .populate('teams')
      .populate('judges')
      .exec((err, school) => {
        if (err) { console.log(err) }
        console.log(`Single School Delivered`)
        res.json(school)
    })
  },
  destroy: (req, res) => {

    //User should never need to do this.
    let id = req.body.id
    db.School.findByIdAndRemove(id, (err, success) => {
      if (err) { console.log(err) }
      console.log(`School removed`)
      res.json(success)
    })
  },
  update: (req, res) => {
    console.log(`This function has yet to be written`)
  }
};
