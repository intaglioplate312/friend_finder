//dependencies
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('../data/friends.js')

// Your `apiRoutes.js` file should contain two routes:
module.exports = function(app) {
    //    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    //    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post('/api/friends', function(req, res) {
        // console.log("friend or foe");

        // grab data in request
        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 40
        };

        // then match
        var newFriend = req.body;
        var friendName = newFriend.name;
        var friendPhoto = newFriend.photo;
        var friendScores = newFriend.scores;

        var totalDifference = 0;

        //  With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through all the scores of each friend
            for (var x = 0; x < friends[i].scores[x]; x++) {

                // Add up the differences to calculate the `totalDifference.
                totalDifference += Math.abs(parseInt(friendScores[x]) - parseInt(friends[i].scores[x]));

                // The closest match will be the user with the least amount of difference.
                if (totalDifference <= friendMatch.friendDifference) {

                    // Reset new friend. 
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = totalDifference;
                }
            }
        }

        //Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        friends.push(newFriend);

        // The modal should display both the name and picture of the closest match.o
        res.json(friendMatch);

    });
};