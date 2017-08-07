// Your `server.js` file should require the basic npm packages we've used in class:
`express`,
`body-parser`
and
    `path`.
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000)