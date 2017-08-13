app.post('/api/friends', function(req, res) {

            // Here we take the result of the friend's survey POST and parse it.
            var newFriend = req.body;
            var lastDiff = [];
            var bestMatch;
            var friendName = newFriend.name;
            var friendPhoto = newFriend.photo;
            var friendScores = newFriend.scores;

            var totalDifference = 0;

            // Loop through all the friend possibilities. 
            friend.forEach(function(req, res) {
                for (var i = 0; i < friends.length; i++) {

                    console.log(friends[i].name);
                    totalDifference = 0;

                    // Loop through all the scores of each friend
                    for (var j = 0; j < friends[i].scores[j]; j++) {

                        // We calculate the difference between the scores and sum them into the totalDifference
                        totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));

                        // If the sum of differences is less then the differences of the current "best match"
                        if (totalDifference <= bestMatch.friendDifference) {

                            // Reset the bestMatch to be the new friend. 
                            bestMatch.name = friends[i].name;
                            bestMatch.photo = friends[i].photo;
                            bestMatch.friendDifference = totalDifference;
                        }
                    }
                }

                // Finally save the friend's data to the database (this has to happen AFTER the check. otherwise,
                // the database will always return that the friend is the friend's best friend).
                friends.push(newFriend);

                // Return a JSON with the friend's bestMatch. This will be used by the HTML in the next page. 
                res.json(bestMatch);

            });


            // const i = value => {
            //     const fn = () => value;

            //     fn.toString = () => `i(${ value })`;

            //     return fn;
            // };

            // const someValue = i(2);

            // console.log(
            //     someValue.toString() // "i(2)"
            // );