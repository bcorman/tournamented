$(document).ready(() => {
console.log(`sanity check`)

//save the metaData
let participatingSchools = []
let tournamentMetaData = {}
let setupPage = `<h2>Set up school</h2>
                    <form id="setup">
                      <input type="text" name="name" placeholder="School Name" />
                      <button type="submit" class="inner-buttons" id="add-school">Add School</button>
                    </form>
                  </div>`

let entryPage = `<div class="tabs-wrapper">
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
                        <input type="text" class="judge-name-field" name="judgeName" placeholder="Judge" />
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

let setupPageNav = `<button class="back-button" id="tolandingPage">Back</button>
                    <button class="continue-button">Continue</button>`

let mainPageNav = `<button class="continue-button" id="continue-landing">Continue</button>`
//Takes user to setup page

$('#dynamic-box').on('click', "#continue-landing", (e) => {
  e.preventDefault()
  //save the metaData
  tournamentMetaData.tournamentName = $('#tourName').val()
  tournamentMetaData.date = $('#date').val()
  tournamentMetaData.location = $('#location').val()
  tournamentMetaData.roundNumber = parseInt($('#roundNumber').val())

  //change the html to setupPage
  $('.main-box').slideUp(500, () => {
    $('.main-box').html(setupPage)
    $('.nav-buttons').html(setupPageNav)
    $('#school-tab').attr('class', 'display')
  }).slideDown()
  


  console.log(tournamentMetaData)
})

//Takes user from setup back to landing, displays saved values

$('#dynamic-box').on('click', "#toLandingPage", (e) => {
  //landing page html must be locally-scoped for meta data to work properly
  let landingPage = `<h2>Welcome</h2>
                       <form>
                         <input id="tourName" type="text" name="name" placeholder="Tournament Name" value="${tournamentMetaData.tournamentName}" />
                         <input id="date" type="text" value="${tournamentMetaData.date}">
                         <input id="location" type="text" name="name" value="${tournamentMetaData.location}" />
                         <input id="roundNumber" type="number" min="1" max="10" name="roundNumber" onfocus="(this.type='number')" onblur="(this.type='text')" value="${tournamentMetaData.roundNumber}" size="3" />
                       </form>`
  e.preventDefault()
  $('.main-box').slideUp(500, () => {
    $('.main-box').html(landingPage)
    $('.nav-buttons').html(mainPageNav)
    $('#school-tab').attr('class', 'noDisplay')
  }).slideDown()
})

//add school to database
$('#dynamic-box').on('click', '#add-school', (e) => {
  e.preventDefault()

  $.ajax({
    method: 'POST',
    url: '/api/schools',
    data: $('#setup').serialize(),
    success: (response) => {
      console.log(response)
      participatingSchools.push({
        name: response.name,
        id: response._id
      })
      let schoolButton = `<button class="school-button" id="${response._id}">${response.name}</button>`
      $('#school-tab').append(schoolButton)


      $(`#${response._id}`).on('click', (e) => {
        console.log(`hey im a button look at me`)
        $('#toLandingPage').attr('id', 'to-setup')
        $('.main-box').slideUp(500, () => {
          $('.main-box').html(entryPage)
        }).slideDown()

        $('#to-setup').on('click', () => {
          $('.main-box').slideUp(500, () => {
            $('.main-box').html(setupPage)
            $('#to-setup').attr('id', 'toLandingPage')
          }).slideDown()
        })

      })


    },
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
  //
  // let person1 = { name: $('#person1').val() }
  // let person2 = { name: $('#person2').val() }
  // let person3 = { name: $('#person3').val() }

  $.ajax({
    method: 'POST',
    url: '/api/person',
    data: { people: [
      {
        firstName: $('#studentName1').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
      },
      {
        firstName: $('#studentName2').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
      },
      {
        firstName: $('#studentName3').val(),
        isJudge: false,
        score: 0,
        isAvailable: true,
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
      name: `team ${$('#studentName1').val()[0]}${$('#studentName2').val()[0]}${$('#studentName3').val()[0]}`,
      wins: 0
    },
    success: (response) => {
      $('#displayTeam').append(`<li>${response.name}</li>`)
      console.log(response)
    },
    error: (a, b, c) => {
      console.log(a)
      console.log(b)
      console.log(c)
    }
  })


})

}) //close document.onReady
