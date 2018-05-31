/////////////////////////////////////////////////////////
/*save data locally*/
/////////////////////////////////////////////////////////
let tournamentMetaData = {}
let participatingSchools = []
let participatingTeams = []
let entryPageData = []
let schoolTabId = undefined

$(document).ready(() => {
console.log(`sanity check`)
/////////////////////////////////////////////////////////
                                /*Save HTML for dynamically-generated pages*/
/////////////////////////////////////////////////////////
let setupPage = `<h2>Set up school</h2>
                    <form id="setup">
                      <input type="text" name="name" placeholder="School Name" />
                      <button type="submit" class="inner-buttons" id="add-school">Add School</button>
                    </form>
                  </div>`

let entryPage = `<div class="tabs-wrapper" id="entry-page">
                    <div class="tabs-rows" class="boxes" id="first-row">
                      <form id="studentForm" class="boxes participants">
                        <input type="text" class="student-name-field" id="studentName1" placeholder="Student" />
                        <input type="text" class="student-name-field" id="studentName2" placeholder="Student" />
                        <input type="text" class="student-name-field" id="studentName3" placeholder="Student" />
                        <br></br>
                        <button id="saveTeam" class="inner-buttons">Save Team</button>
                      </form>
                      <div class="boxes lists">
                        <h4>Team List</h4>
                        <ul id="displayTeam">

                        </ul>
                      </div>
                    </div>
                    <div class="tabs-rows">
                      <form id="judgeForm" class="boxes participants">
                        <input type="text" class="judge-name-field" name="judgeName" id="judge" placeholder="Judge" />
                        <br></br>
                        <button class="inner-buttons">Save Judge</button>
                      </form>
                      <div class="boxes lists">
                        <h4>Judges</h4>
                        <ul id="displayJudge">

                        </ul>
                      </div>
                    </div>
                  </div>`

let setupPageNav = `<button class="back-button" id="to-landing">Back</button>
                    <button class="continue-button" id="to-pairings">Pair Teams</button>`

let landingPageNav = `<button class="continue-button" id="to-setup">Setup</button>`

let entryPageNav = `<button class="back-button" id="back-to-setup">Back to Setup</button>`

/////////////////////////////////////////////////////////
                                /*other variables*/
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
                                /*functions for page generation*/
/////////////////////////////////////////////////////////

let generatePage = (newPage) => {
  $('.main-box').slideUp(500, () => {
    $('.main-box').html(newPage)
  }).slideDown()
}

let generateNav = (newNav) => {
  $('.nav-buttons').html(newNav)
}

let saveTournamentMetaData = () => {
  tournamentMetaData.tournamentName = $('#tourName').val()
  tournamentMetaData.date = $('#date').val()
  tournamentMetaData.location = $('#location').val()
  tournamentMetaData.roundNumber = parseInt($('#roundNumber').val())
}

let saveEntryData = () => {
  let entries = {
    teams: $('.team').forEach( team => {
      return team.val()
    }),
    judges: $('.judge').forEach( judge => {
      return judge.val()
    })
  }
  entryPageData.push(entries)
}
/////////////////////////////////////////////////////////
                                /*AJAX success functions*/
/////////////////////////////////////////////////////////

//this function is called when school is created.

let addSchool = (response) => {
  participatingSchools.push(response)
  schoolTabId = participatingSchools.length -1
//school tab is created above setup page
  let schoolTab = `<button class="school-tab" id="${schoolTabId}">${response.name}</button>`
  $('#school-nav').append(schoolTab)
//click handler added to new school button
  $(`#${schoolTabId}`).on('click', () => {
    generatePage(entryPage)
    generateNav(entryPageNav)
  })

}

/////////////////////////////////////////////////////////
                      //click handlers / event listeners
/////////////////////////////////////////////////////////
//Setup Page generator

$('#dynamic-box').on('click', "#to-setup", () => {
//save the metaData
  saveTournamentMetaData()
//change the html to setupPage
  generatePage(setupPage)
//change nav button
  generateNav(setupPageNav)
//Display School Tab
  $('#school-tab').attr('class', 'display')

  console.log(tournamentMetaData)
})

//Landing Page Generator (accessed from setup)

$('#dynamic-box').on('click', "#to-landing", () => {
  //in this version, landing page html must be locally-scoped for meta data to display properly
  let landingPage = `<h2>Welcome</h2>
                       <form>
                         <input id="tourName" type="text" name="name" placeholder="Tournament Name" value="${tournamentMetaData.tournamentName}" />
                         <input id="date" type="text" placeholder="Date" value="${tournamentMetaData.date}">
                         <input id="location" type="text" name="name" placeholder="Location" value="${tournamentMetaData.location}" />
                         <input id="roundNumber" type="number" placeholder="Number of Rounds" value="${tournamentMetaData.roundNumber}" size="3" />
                       </form>`

  generatePage(landingPage)
  generateNav(landingPageNav)
  $('#school-tab').attr('class', 'noDisplay')
})

//Back to setup from Entry Page

$('#dynamic-box').on('click', '#back-to-setup', () => {
  saveEntryData()
  generatePage(setupPage)
  generateNav(setupPageNav)
})
//add school to database

$('#dynamic-box').on('click', '#add-school', (e) => {
  e.preventDefault()

  $.ajax({
    method: 'POST',
    url: '/api/schools',
    data: $('#setup').serialize(),
    success: addSchool,
    error: (a, b, c) => {
      console.log(a)
      console.log(b)
      console.log(c)
    }
  })
})

//send entry form data to backend and create students and a team

$('#dynamic-box').on('click', '#saveTeam', (e) => {
  e.preventDefault()

  $.ajax({
    method: 'POST',
    url: '/api/person',
    data: { people: [
      {
        name: $('#studentName1').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
        affiliation: participatingSchools[schoolTabId]
      },
      {
        name: $('#studentName2').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
        affiliation: participatingSchools[schoolTabId]
      },
      {
        name: $('#studentName3').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
        affiliation: participatingSchools[schoolTabId]
      }]
    },
    success: (response) => {
      console.log(`look at me now im three people`)
    },
    error: (a, b, c) => {
      console.log(a)
      console.log(b)
      console.log(c)
    }
  })

  $.ajax({
    method: 'POST',
    url: '/api/teams',
    data: {
      name: `${participatingSchools[schoolTabId].name} ${$('#studentName1').val()[0]}${$('#studentName2').val()[0]}${$('#studentName3').val()[0]}`,
      wins: 0,
      school: participatingSchools[schoolTabId]
    },
    success: (response) => {
      $('#displayTeam').append(`<li class="team">${response.name}</li>`)
      console.log(response)
    },
    error: (a, b, c) => {
      console.log(a)
      console.log(b)
      console.log(c)
    }
  })


})
//Create Judge
$.ajax({
  method: 'POST',
  url: '/api/person',
  data { person: {
    name: $('#judge').val(),
    isJudge: true,
    isAvailable: true,
    affiliation: participatingSchools[schoolTabId]
    }
  },
  success: (response) => {
    $('#displayJudge').append(`<li class="judge">${response.name}</li>`)
  }
})

}) //close document.onReady
