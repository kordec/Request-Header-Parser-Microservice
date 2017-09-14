// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  console.log(req.headers)
  let language = req.headers['accept-language'].split(',')[0]
  let ip = req.headers['x-forwarded-for'].split(',')[0]
  let OS = req.headers['user-agent'].match(/\([^(]*\)/)[0].replace(/[()]/g, '')
  let user = {ip, language, OS}
  res.send(user)
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
