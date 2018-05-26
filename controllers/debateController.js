// tell server to look at index.js
const express = require('express'),
bodyParser = require('body-parser');

//Get express
const app = express();

//Tell controller to look at database
const db = require('../models/')

/*CRUD Functions

Create - debates are generated when teams are paired, not through this controller
Read - Added.
Update - function not needed for Minimum Viable Product
Destroy - not needed for MVP */

module.exports = {
  index: (req, res) => {
    //get all debates
    db.Debate.find({})
    //not currently sure if populate is necessary. Adding anyway.
      .populate('teams.prop')
      .populate('teams.opp')
      .populate('judge')
      .exec((err, debates) => {
        if (err) { console.log(err) }
        console.log(`Debates Delivered`)
        res.json(debates)
      })
  },
  create: (req, res) => {
    console.log(`This function will not likely be written`)
  },
  show: (req, res) => {
    //get single debate
    let id = req.body.id
    db.Debate.findById(id)
      //again, populate may be unnecessary
      .populate('teams.prop')
      .populate('teams.opp')
      .populate('judge')
      .exec((err, debate) => {
        if (err) { console.log(err) }
        console.log(`Single Debate Delivered`)
        res.json(debate)
    })
  },
  destroy: (req, res) => {
    // Single debates will never need to be destroyed. All debates can be destroyed between tournaments.
    db.Debate.remove({}, (err, success) => {
      if (err) { console.log(err) }
      console.log(`I hope you know what you are doing...`)
      res.json(success)
    })
  },
  update: (req, res) => {
    console.log(`This function has yet to be written`)
  }
};
