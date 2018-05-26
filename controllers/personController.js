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
    //get all people
    db.Person.find({})
    //not currently sure if populate is necessary. Adding anyway.
      .populate('affiliation')
      .populate('team')
      .exec((err, people) => {
        if (err) { console.log(err) }
        console.log(`People Delivered`)
        res.json(people)
      })
  },
  create: (req, res) => {
    console.log(`This function will not likely be written`)
  },
  show: (req, res) => {
    //get single person
    let id = req.body.id
    db.Person.findById(id)
      //again, populate may be unnecessary
      .populate('affiliation')
      .populate('team')
      .exec((err, person) => {
        if (err) { console.log(err) }
        console.log(`Single Person Delivered`)
        res.json(person)
    })
  },
  destroy: (req, res) => {
    let id = req.body.id
    db.Person.findByIdAndRemove(id, (err, success) => {
      if (err) { console.log(err) }
      console.log(`Person removed`)
      res.json(success)
    })
  },
  update: (req, res) => {
    console.log(`This function has yet to be written`)
  }
};
