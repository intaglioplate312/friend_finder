//data as an array of objects.
//json
var friends = [{
        "name": "Riz Ahmed",
        "photo": "../images/Riz_Ahmed.png",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Nigel Molesworth",
        "photo": "../images/Ronald-Searle-Molesworth--007.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            5,
            5,
            5,
            5,
            5
        ]
    },
    {
        "name": "Anna Howe",
        "photo": "../images/anna_howe.jpg",
        "scores": [
            5,
            4,
            3,
            2,
            1,
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Elinor Dashwood",
        "photo": "../images/e_dashwood.jpg",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            5,
            4,
            3,
            2,
            1
        ]
    },

];

//create export module for use in apiRoutes var friends = require('../friend.js')
module.exports = friends;