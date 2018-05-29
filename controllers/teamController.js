// tell server to look at index.js
const express = require('express'),
bodyParser = require('body-parser')

//Get express
const app = express()

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
    //get all teams
    db.Team.find({})
    //not currently sure if populate is necessary. Adding anyway.
      .populate('debates')
      .populate('student')
      .populate('schools')
      .exec((err, teams) => {
        if (err) { console.log(err) }
        console.log(`Teams Delivered`)
        res.json(teams)
      })
  },
  create: (req, res) => {
    console.log(`This function has yet to be written`)
  },
  show: (req, res) => {
    //get single team
    let id = req.body.id
    db.Team.findById(id)
      //again, populate may be unnecessary
      .populate('debates')
      .populate('students')
      .populate('schools')
      .exec((err, team) => {
        if (err) { console.log(err) }
        console.log(`Single Team Delivered`)
        res.json(team)
    })
  },
  destroy: (req, res) => {
    let id = req.body.id
    db.Team.findByIdAndRemove(id, (err, success) => {
      if (err) { console.log(err) }
      console.log(`Team removed`)
      res.json(success)
    })
  },
  update: (req, res) => {
    console.log(`This function has yet to be written`)
  }
}
