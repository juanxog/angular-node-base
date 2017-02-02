// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = {};
//config.watchDir = __dirname + "/public";
//livereload(app, config);
var path = require('path');
var fs = require('fs')
var livereload = require('express-livereload');
var config = {};
config.watchDir = __dirname + "/public";
livereload(app, config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth");
  next();
});

router.get('/test' ,function (req, res) {
     res.status(200).send({ response: "ok"});
    res.end();   
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
