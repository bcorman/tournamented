$(document).ready(() => {
console.log(`sanity check`)

//save the metaData

let tournamentMetaData = {}
let setupPage = `<h2>Set up school</h2>
                    <form id="setup">
                      <input type="text" name="name" placeholder="School Name" />
                      <button type="submit" class="inner-buttons" id="add-school">Add School</button>
                    </form>
                  </div>
                  <div class ="nav-buttons">
                    <button class="back-button" id="to-index">Back</button>
                    <!-- should appear when created tabs are filled -->
                    <button class ="continue-button">Continue</button>`

let entryPage = `<div class="tabs-wrapper">
                    <div class="tabs-rows" class="boxes" id="first-row">
                      <div class="boxes participants">
                        <input type="text" class="student-name-field" name="StudentName1" placeholder="Student" />
                        <input type="text" class="student-name-field" name="StudentName2" placeholder="Student" />
                        <input type="text" class="student-name-field" name="StudentName3" placeholder="Student" />
                        <br></br>
                        <button class="inner-buttons">Save Team</button>
                      </div>
                      <div class="boxes lists">
                        <h4>Team List</h4>
                        <ul>
                          <li>ABC</li>
                          <li>ABC</li>
                          <li>ABC</li>
                        </ul>
                      </div>
                    </div>
                    <div class="tabs-rows">
                      <div class="boxes participants">
                        <input type="text" class="judge-name-field" name="JudgeName" placeholder="Judge" />
                        <br></br>
                        <button class="inner-buttons">Save Judge</button>
                      </div>
                      <div class="boxes lists">
                        <h4>Judges</h4>
                        <ul>
                          <li>Holden</li>
                        </ul>
                      </div>
                    </div>
                  </div>`
//Takes user to setup page

$('.main-box').on('click', "#continue-landing", (e) => {
  e.preventDefault()
  //save the metaData
  tournamentMetaData.tournamentName = $('#tourName').val()
  tournamentMetaData.date = $('#date').val()
  tournamentMetaData.location = $('#location').val()
  tournamentMetaData.roundNumber = parseInt($('#roundNumber').val())

  //change the html to setupPage
  $('.main-box').slideUp(500, () => {
    $('.main-box').html(setupPage)
  }).slideDown()
  // $('.main-box').html(setupPage)


  console.log(tournamentMetaData)
})

//Takes user from setup back to landing, displays saved values

$('.main-box').on('click', "#to-index", (e) => {
  //landing page html must be locally-scoped for meta data to work properly
  let landingPage = `<h2>Welcome</h2>
                       <form>
                         <input id="tourName" type="text" name="name" placeholder="Tournament Name" value="${tournamentMetaData.tournamentName}" />
                         <input id="date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" value="${tournamentMetaData.date}">
                         <input id="location" type="text" name="name" value="${tournamentMetaData.location}" />
                         <input id="roundNumber" type="number" min="1" max="10" name="roundNumber" onfocus="(this.type='number')" onblur="(this.type='text')" value="${tournamentMetaData.roundNumber}" size="3" />
                       </form>`
  e.preventDefault()
  $('.main-box').slideUp(500, () => {
    $('.main-box').html(landingPage)
  }).slideDown()
})

//add school to database
$('.main-box').on('click', '#add-school', (e) => {
  e.preventDefault()

  $.ajax({
    method: 'POST',
    url: '/api/schools',
    data: $('#setup').serialize(),
    success: (response) => {
      console.log(response)
      let schoolButton = `<button class="school-button" id="${response._id}">${response.name}</button>`
      $('.school-tab').append(schoolButton)


      $(`#${response._id}`).on('click', (e) => {
        console.log(`hey im a button look at me`)
        $('#to-index').attr('id', 'to-setup')
        $('.main-box').slideUp(500, () => {
          $('.main-box').html(entryPage)
        }).slideDown()

        $('#to-setup').on('click', () => {
          $('.main-box').slideUp(500, () => {
            $('.main-box').html(setupPage)
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


})
