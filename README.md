<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tournamented</title>
  <!--icon in title bar-->
  <link rel="shortcut icon" href="../public/images/circleMegaphone.png" />
  <!-- STYLESHEETS -->
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|Raleway:500,600" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
  <!-- TODO: CHANGE PATH AFTER PULL REQUEST -->
  <link rel="stylesheet" href="../public/styles/styles.css">
</head>

<body>
  <header>
    <h1><a href="#">Tournament</a></h1>
  </header>

  <main>
    <div class="wrapper">

      <div class="main-box">

        <h2>Enter Results</h2>
        <div class="results boxes"></div>

      </div>

      <div class ="nav-buttons">
      <button id ="back-button"><a href="tabs.html">Back</a></button>
      <button id ="continue-button"><a href="results.html">Begin Debate</a></button>
    </div>

    </div>
  </main>

  <footer>
    <p> ©2018 <a href="#">Ben Cornman</a> & <a href="https://www.linkedin.com/in/chris-kanyotu/">Chris Kanyotu</a></p>
  </footer>

  <!-- SCRIPTS -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
  <script src="/scripts/app.js" defer></script>
</body>

</html>
