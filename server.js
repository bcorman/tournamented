app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  // res.send("Hey!Working!");
});

// get route for controllers


app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely listening at http://localhost:3000/');
});
