//dependencies
var path = require('path');

// export functions for two routes:
module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'))
    });

    //GET Route to `/survey` which should display the survey page.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'))
    });

    //A default USE route that leads to `home.html` which displays the home page.
    app.use('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
};