//dependencies
var path = require('path');

// export functions for two routes:
module.exports = function(app) {

    //GET Route to `/survey` which should display the survey page.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__direname + '/../public/survey.html'))
    });

    //A default USE route that leads to `home.html` which displays the home page.
    app.use(function(req, res) {
        res.sendFile(path.join(__direname + '/../public/home.html'));
    });
};