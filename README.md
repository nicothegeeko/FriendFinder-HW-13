# FriendFinder-HW-13

# Week of 13 HW: Friend Finder - Node and Express Servers

  ## Link to Heroku: https://nico-foodie-friend-finder.herokuapp.com/

### App Description

This application is built to help you succesfully discover a that best matches your tastes. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Using Express to handle routing, and deployed app to heroku. 


### Instructions

The survey has 10 questions, first click on the "Go to Survey" button to begin. Then once you begin input your Name and link to a web hosted photo image. After that input answers to questions 1-10 most closely resembling your foodie prefrences. 

After that, hit submit and see which foodie friend is closest to your inputs.



### Technologies Used 

* HTML
* Bootstrap
* Node 
* Express
* JavaScript
* JQuery

### Code Explanation:

The most difficult part for me was coming up with a way to compare the users input and to best match them with a foodie companion.

However, I eventually realized that by having two for loops I could compare two different objects.

```
// Loop through the info and create the foodie friend match

        var foodieFriend;
        var bestMatch = 100;
        var differenceArray = [];
        //loops through all friends with the exception of the one just created
        for (i = 0; i < res.length - 1; i++) {
            //compares the values from the survey questions and pushes the absolute value of the differences to the difference array
            for (j = 0; j < 10; j++) {
                var currentDifference = newFriend.scores[j] - res[i].scores[j];
                differenceArray.push(Math.abs(currentDifference));
            }
            //adds the values in the array to give a single value that represents the difference between a potential friend and the current entry
            var difference = differenceArray.reduce(add, 0);
            //push the match to the closest match based on all of the people input to the foodie matches
            if (difference < bestMatch) {
                foodieFriend = res[i];
                bestMatch = difference;
                differenceArray = [];
            }
            //if no match is made
            else {
                differenceArray = [];
            }

        }
```

