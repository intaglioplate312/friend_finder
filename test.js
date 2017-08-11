// var newFriend = req.body;
// var lastDiff = [];
// var bestMatch;
// friend.forEach(function(req, res) {

//     //Math.abs([1,2]);    // NaN-- returns the absolute value of a number
//     for (var i = 0; i < newFriendScores.length; j++) {
//         diff += Math.abs(apiFriends.scores[i] - newFriend.scores[i]);
//     }

// });

const t = value => {
    const fn = () => value;

    fn.toString = () => `t(${ value })`;

    return fn;
};

const someValue = t(2);

console.log(
    someValue.toString() // "t(2)"
);