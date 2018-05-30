var db = require('./models')

//Seed Data
// 4 schools with 6 students and 1 judge each - sufficient for 8 total debate teams/ 4 total debates.

let sampleSchools = [{
  name: 'British International School',
  number: 1
}, {
  name: 'Foon Wizard Academy',
  number: 2
}, {
  name: 'NEST',
  number: 3
}, {
  name: 'Brearley School',
  number: 4
}]
                                  /* British */
const britishPeople = [{
  firstName: 'Ray',
  lastName: 'Davies',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'George',
  lastName: 'Orwell',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Rod',
  lastName: 'Stewart',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Ronnie',
  lastName: 'Lane',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'George',
  lastName: 'Smiley',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Jim',
  lastName: 'Prideaux',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Vaclav',
  lastName: 'Paris',
  isJudge: true,
  isAvailable: true
}]
                            /* Foon */
const foonPeople = [{
  firstName: 'Usidore',
  lastName: 'The Blue',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Fi\'ang',
  lastName: 'Yalok',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Zoenen',
  lastName: 'Hoogstandjes',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Gasmueneas',
  lastName: 'Maestar',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Stinson',
  lastName: 'Chapeau',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Toby',
  lastName: 'LeRone',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Sleepy',
  lastName: 'LeBoeuf',
  isJudge: true,
  isAvailable: true
}]
                                  /* Nest */
const nestPeople = [{
  firstName: 'Pierre',
  lastName: 'Robin',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Doderick',
  lastName: 'Soup',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Raggedy',
  lastName: 'Anne',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Encyclopedia',
  lastName: 'Brown',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Murphy',
  lastName: 'Brown',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Jian',
  lastName: 'Leon',
  isJudge: false,
  isAvailable: true,
  score: 0
}, {
  firstName: 'Franz',
  lastName: 'DerVerf',
  isJudge: true,
  isAvailable: true
}]
                              /* Brearley */
const brearleyPeople = [{
firstName: 'Greg',
lastName: 'Stritch',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Frank',
lastName: 'Kuntz',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Yossarian',
lastName: 'The Assyrian',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Orr',
lastName: 'Swede',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Nately',
lastName: 'Garfunkel',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Alan',
lastName: 'Arkansas',
isJudge: false,
isAvailable: true,
score: 0
}, {
firstName: 'Clifford',
lastName: 'York',
isJudge: true,
isAvailable: true
}]

// Seed Functions


// Create all schools
let createSchools = (schools) => {

  db.School.create(schools, (err, success) => {
    if (err) { console.log(err) }
    console.log(`created schools`)
  })
}

//Find specific school by name
let findSchool = (schoolName) => {
  db.School.findOne({ name: schoolName }, (err, school) => {
    if (err) { console.log(err) }
    console.log(`found ${school}`)
    return school
  })
}
//Team assignment functions
let assignTeams = (teamName1, teamName2, school, personArray) => {
  let team1 = new db.Team({
    name: teamName1,
    wins: 0,
    school: school
  })
  let team2 = new db.Team({
    name: teamName2,
    wins: 0,
    school: school
  })

  for (let i = 0; i < 3; i++ ) {
    personArray[i].team = team1
  }
  for (let i = 3; i< 7; i++) {
    personArray[i].team = team2
  }

  team1.save((err, succ) => {
    if (err) { console.log(err) }
    console.log(`saved ${teamName1}`)
  })
  team2.save((err, succ) => {
    if (err) { console.log(err) }
    console.log(`saved ${teamName2}`)
  })
  console.log(`${school.name} teams saved`)
}

//School assignment function

let assignSchool = (personArray, school) => {
  personArray.forEach( person => {
    person.affiliation = school
    console.log(`${person.firstName} ${person.lastName} assigned to ${school.name}`)
  })
}

let seedDatabase = () => {

  db.School.remove({}, (err, succ) => {
    if (err) { console.log(err) }
    console.log(`removed all schools`)

      db.Team.remove({}, (err, succ) => {
        if (err) { console.log(err) }
        console.log(`removed all teams`)

        db.Debate.remove({}, (err, succ) => {
          if (err) { console.log(err) }
          console.log(`removed all debates`)

          db.Person.remove({}, (err, succ) => {
            if (err) { console.log(err) }
            console.log(`removed all people`)

            db.School.create(sampleSchools, (err, success) => {
              if (err) { console.log(err) }
              console.log(`created schools`)

              let britishSchool = success[0]
              let foonSchool = success[1]
              let nestSchool = success[2]
              let brearleySchool = success[3]

              //assign schools

              assignSchool(britishPeople, britishSchool)
              assignSchool(foonPeople, foonSchool)
              assignSchool(nestPeople, nestSchool)
              assignSchool(brearleyPeople, brearleySchool)

              //assign teams and save
              assignTeams('British-DOS', 'British-LSP', britishSchool, britishPeople)
              assignTeams('Foon-BYH', 'Foon-MCL', foonSchool, foonPeople)
              assignTeams('Nest-RSA', 'Nest-BBL', nestSchool, nestPeople)
              assignTeams('Brearley-SKT', 'Brearley-SGA', brearleySchool, brearleyPeople)

              //create people
              db.Person.create(britishPeople, (err, newBrits) => {
                if (err) { console.log(err) }
                newBrits.forEach( brit => {
                  console.log(`created ${brit.firstName} ${brit.lastName}`)
                })
                db.Person.create(foonPeople, (err, newFoons) => {
                  if (err) { console.log(err) }
                  newFoons.forEach( foony => {
                    console.log(`created ${foony.firstName} ${foony.lastName}`)
                  })
                  db.Person.create(nestPeople, (err, newNest) => {
                    if (err) { console.log(err) }
                    newNest.forEach( nester => {
                      console.log(`created ${nester.firstName} ${nester.lastName}`)
                    })
                    db.Person.create(brearleyPeople, (err, newBrearleys) => {
                      if (err) { console.log(err) }
                      newBrearleys.forEach( brearlier => {
                        console.log(`created ${brearlier.firstName} ${brearlier.lastName}`)
                      })
                    })
                  })
                })
              })
            })
          })

        })
      })
    })
  }

// Function Calls

seedDatabase()
