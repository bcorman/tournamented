var db = require('./models')

//Seed Data
// 4 schools with 6 students and 1 judge each - sufficient for 8 total debate teams/ 4 total debates.

let sampleSchools = [{
  name: 'British International School'
}, {
  name: 'Foon Wizard Academy'
}, {
  name: 'NEST'
}, {
  name: 'Brearley School'
}]
                                  /* British */
const britishPeople = [{
  firstName: 'Ray',
  lastName: 'Davies',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'George',
  lastName: 'Orwell',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Rod',
  lastName: 'Stewart',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Ronnie',
  lastName: 'Lane',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'George',
  lastName: 'Smiley',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Jim',
  lastName: 'Prideaux',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Vaclav',
  lastName: 'Paris',
  isJudge: true,
  isAvailable: true,
}]
                            /* Foon */
const foonPeople = [{
  firstName: 'Usidore',
  lastName: 'The Blue',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Fi\'ang',
  lastName: 'Yalok',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Zoenen',
  lastName: 'Hoogstandjes',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Gasmueneas',
  lastName: 'Maestar',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Stinson',
  lastName: 'Chapeau',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Toby',
  lastName: 'LeRone',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Sleepy',
  lastName: 'LeBoeuf',
  isJudge: true,
  isAvailable: true,
}]
                                  /* Nest */
const nestPeople = [{
  firstName: 'Pierre',
  lastName: 'Robin',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Doderick',
  lastName: 'Soup',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Raggedy',
  lastName: 'Anne',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Encyclopedia',
  lastName: 'Brown',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Murphy',
  lastName: 'Brown',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Jian',
  lastName: 'Leon',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Franz',
  lastName: 'DerVerf',
  isJudge: true,
  isAvailable: true,
}]
                              /* Brearley */
const brearleyPeople = [{
firstName: 'Greg',
lastName: 'Stritch',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Frank',
lastName: 'Kuntz',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Yossarian',
lastName: 'The Assyrian',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Orr',
lastName: 'Swede',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Nately',
lastName: 'Garfunkel',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Alan',
lastName: 'Arkansas',
isJudge: false,
isAvailable: true,
score: 0,
}, {
firstName: 'Clifford',
lastName: 'York',
isJudge: true,
isAvailable: true,
}]

// Seed Function

//Remove all schools, people, teams

db.School.remove({}, (err, succ) => {
  if (err) { console.log(err) }
  console.log(`removed all schools`)

  //Create all schools
  db.School.create(sampleSchools, (err, success) => {
    if (err) { console.log(err) }
    console.log(`created schools`)

    //Remove all people
    db.Person.remove({}, (err, succ) => {
      if (err) { console.log(err) }
      console.log(`removed all people`)

      db.Team.remove({}, (err, succ) => {
        if (err) { console.log(err) }
        console.log(`removed all teams`)

        db.Debate.remove({}, (err, succ) => {
          if (err) { console.log(err) }
          console.log(`removed all debates`)



                                           //Get Brits sorted...

          //Load British School People
          db.Person.create(britishPeople, (err, brits) => {
            if (err) { console.log(err) }
            console.log(`loaded Brits`)

            //Find British school
            db.School.findOne({ name: 'British International School' }, (err, britSchool) => {
              if (err) { console.log(err) }
              console.log(`${britSchool} found`)

            //find Brits
            db.Person.find({}, (err, foundBrits) => {

              //Assign School to Brits
              foundBrits.forEach( britishPerson => {
                britishPerson.affiliation = britSchool

                //Assign Students and Judges to school
                if (britishPerson.isJudge === false) {
                  britSchool['students'].push(britishPerson)
                } else {
                  britSchool['judges'].push(britishPerson)
                }
              })
            })


              //Make two British teams - hardcode the names and students
              let britTeam1 = new db.Team({
                name: 'Brit-DOS',
                wins: 0,
                school: britSchool,
              })
              let britTeam2 = new db.Team({
                name: 'Brit-LSP',
                wins: 0,
                school: britSchool,
              })

              //Assign Students to/from teams

              //Team 1
              db.Person.findOne({lastName: `Davies`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam1['students'].push(student)
                student.team = britTeam1
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`Ray Davies loaded`)
                })
              })
              db.Person.findOne({lastName: `Orwell`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam1['students'].push(student)
                student.team = britTeam1
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`George Orwell is waiting`)
                })
              })
              db.Person.findOne({lastName: `Stewart`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam1['students'].push(student)
                student.team = britTeam1
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`Rod Stewart has arrived`)
                })
              })

              //Team 2
              db.Person.findOne({lastName: `Lane`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam2['students'].push(student)
                student.team = britTeam2
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`Ronnie Lane is here`)
                })
              })
              db.Person.findOne({lastName: `Smiley`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam2['students'].push(student)
                student.team = britTeam2
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`Smiley's People`)
                })
              })
              db.Person.findOne({lastName: `Prideaux`}, (err, student) => {
                if (err) { console.log(err) }
                britTeam2['students'].push(student)
                student.team = britTeam2
                student.save((err,success) => {
                  if (err) { console.log(err) }
                  console.log(`Prideaux waits`)
                })
              })

              //save teams
              britTeam1.save((err,success) => {
                if (err) { console.log(err) }
                console.log(`team1 saved`)
              })
              britTeam2.save((err,success) => {
                if (err) { console.log(err) }
                console.log(`team2 saved`)
              })
            })
          })
        })
      })
    })
  })
})
