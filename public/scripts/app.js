 console.log("Sanity Check: JS is working!")



// hard-coded schools
let sampleSchools = [{
  name: 'British International School'
}, {
  name: 'Foon Wizard Academy'
}, {
  name: 'NEST'
}, {
  name: 'Brearley School'
}]


$(document).ready(function() {
  console.log('app.js loaded!');


  // make a get request for all schools
  $.ajax({
    method: 'GET',
    url: '/api/schools',
    success: renderSchool,
    error: handleError
  });
});


// // this function takes a single school and renders it to the page
let renderSchool = (sampleSchools) => {
  sampleSchools.forEach( school => {
    console.log(`rendering school ${school.name}`)
  })
}

function handleError(err){
  console.log('There has been an error: ', err);
}



