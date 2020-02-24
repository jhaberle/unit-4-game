// creating a random number between 1 and 120 for the player to guess

var cry1 = "";
var cry2 = "";
var cry3 = "";
var cry4 = "";
var randomNumber = "";
var userScore = 0;

// scoreboard variables
var wins = 0;
var losses = 0;

function getRandomNumber() {

    
        var cry1 = 1 + Math.floor(Math.random() * 12);
        console.log(randomNumber);
        return cry1;
    }   

    $('#cry1').on('click', function() {
        var myVariable = getRandomNumber();
        console.log(myVariable);
    });


        // var cry2 = 1 + Math.floor(Math.random() * 12);
        // console.log(randomNumber);
        // return rando;

        // var cry3 = 1 + Math.floor(Math.random() * 12);
        // console.log(randomNumber);
        // return rando;

        // var cry4 = 1 + Math.floor(Math.random() * 12);
        // console.log(randomNumber);
        // return rando;





    