// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name": "Master Genji",
    "photo": "https://s-media-cache-ak0.pinimg.com/736x/90/c4/0a/90c40a2e618ca77cf83d6ce749e78e53.jpg",
    scores:[
    1,
    2,
    4,
    3,
    1,
    2,
    3,
    2,
    5,
    3
    ]
    
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;