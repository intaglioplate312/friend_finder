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
        console.log("friend or foe");

        // grab data in request
        // then match
           var newFriend = req.body;
            var lastDiff = [];
            var bestMatch;
            var friendName = newFriend.name;
            var friendPhoto = newFriend.photo;
            var friendScores = newFriend.scores;

            var totalDifference = 0;

            //  With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`
            friend.forEach(function(req, res) {
                for (var i = 0; i < friends.length; i++) {

                    console.log(friends[i].name);
                    totalDifference = 0;

                    // Loop through all the scores of each friend
                    for (var j = 0; j < friends[i].scores[j]; j++) {

                        // Add up the differences to calculate the `totalDifference`.

                        totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));

                        // The closest match will be the user with the least amount of difference.

                        if (totalDifference <= bestMatch.friendDifference) {

                            // Reset the bestMatch to be the new friend. 
                            bestMatch.name = friends[i].name;
                            bestMatch.photo = friends[i].photo;
                            bestMatch.friendDifference = totalDifference;
                        }
                    }
                }

                //Once you've found the current user's most compatible friend, display the result as a modal pop-up.
                friends.push(newFriend);

              // The modal should display both the name and picture of the closest match.o

                res.json(bestMatch);

            });



        // post data from survey

        //Logic for comparing answers and matching friends goes here
        //Determine the user's most compatible friend using the following as a guide:

        //    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
        //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        //      * Example: 
        //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        //        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        //        * Total Difference: **2 + 1 + 2 =** **_5_**
        //    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
        //    * The closest match will be the user with the least amount of difference.

        // 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        //    * The modal should display both the name and picture of the closest match.o

    });
};