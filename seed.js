const db = require('./models')

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
let britishPeople = [{
  firstName: 'Jimmy',
  lastName: 'James',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Sammy',
  lastName: 'Smithers',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Wilson',
  lastName: 'Rickets',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Jamiroquai',
  lastName: 'Jett',
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
  firstName: 'Mortimer',
  lastName: 'Goth',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Chunt',
  lastName: 'The Badger',
  isJudge: true,
  isAvailable: true,
  score: 0,
}]
                            /* Foon */
let foonPeople = [{
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
  score: 0,
}]
                                  /* Nest */
let nestPeople = [{
  firstName: 'Pierre',
  lastName: 'Robin',
  isJudge: false,
  isAvailable: true,
  score: 0,
}, {
  firstName: 'Clonique',
  lastName: 'Striply',
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
  score: 0,
}]
                              /* Brearley */
let brearleyPeople = [{
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
score: 0,
}]

// Seed Functions
