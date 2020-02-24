// creating a random number between 1 and 120 for the player to guess

var crystalValue1 = "";
var crystalValue2 = "";
var crystalValue3 = "";
var crystalValue4 = "";
var randomNumber = "";
var userScore = 0;
var myVariable = "";

// scoreboard variables
var wins = 0;
var losses = 0;



// function to create random number for each crystal
function getRandomNumber() {

    
        var randomNumber = 1 + Math.floor(Math.random() * 12);
        return randomNumber;
    }   

    $('#cry1').on('click', function() {
        var crystalValue1 = getRandomNumber();
        console.log(crystalValue1);
        return crystalValue1;
    });

    $('#cry2').on('click', function() {
        var crystalValue2 = getRandomNumber();
        console.log(crystalValue2);
        return crystalValue2;
    });

    $('#cry3').on('click', function() {
        var crystalValue3 = getRandomNumber();
        console.log(crystalValue3);
        return crystalValue3;
    });

    $('#cry4').on('click', function() {
        var crystalValue4 = getRandomNumber();
        console.log(crystalValue4);
        return crystalValue4;
    });
    
    $('#current-score').