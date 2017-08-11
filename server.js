//dependencies
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')

//create express app
var app = express();

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// middelware have to trust Mark on this one :-)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//ro͞ots for me routs for everyone else
// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//listener text heroku suggested??
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});