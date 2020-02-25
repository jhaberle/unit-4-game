// assigning a random number to each crystal at the start of the game
var computerRandomNumber = 19 + Math.floor(Math.random() * 120);
var crystalValue1 = 1 + Math.floor(Math.random() * 12);
var crystalValue2 = 1 + Math.floor(Math.random() * 12);
var crystalValue3 = 1 + Math.floor(Math.random() * 12);
var crystalValue4 = 1 + Math.floor(Math.random() * 12);
var randomNumber = [];
var userScore = 0;
var myVariable = [];
var startButton = [];


// scoreboard variables
var wins = 0;
var losses = 0;



// function to create random number for each crystal
function getRandomNumber() {

    
        var randomNumber = 1 + Math.floor(Math.random() * 12);
        return randomNumber;
    }   
// function to generate random number for user to work toward
function generateNumber() {

    
        var computerRandomNumber = 19 + Math.floor(Math.random() * 120);
        return computerRandomNumber;
    } 

    $('#start-button').on('click', function() {
        var startButton = computerRandomNumber;
        var computerRandomNumber = generateNumber();
        $("#computer-random-number").html(computerRandomNumber);
    });

    

    
    
    $('#cry1').on('click', function() {
        userScore += crystalValue1;
        $('#current-score').html(userScore);
        console.log(crystalValue1);
    });

    $('#cry2').on('click', function() {
        userScore += crystalValue2;
        $('#current-score').html(userScore);
        console.log(crystalValue2);
    });

    $('#cry3').on('click', function() {
        userScore += crystalValue3;
        $('#current-score').html(userScore);
        console.log(crystalValue3);
    });

    $('#cry4').on('click', function() {
        userScore += crystalValue4;
        $('#current-score').html(userScore);
        console.log(crystalValue4);
    });

if (userScore === computerRandomNumber) {
    alert("You Won!");
    wins++;
    $("#scoreboard").html(" " + wins);
} 

if (userScore >= computerRandomNumber) {
    alert("Bummer...you lost.");
    losses++;
    $("#scoreboard").html(" " + losses);
}
    
