// assigning a random number to each crystal at the start of the game
var computerRandomNumber = 19 + Math.floor(Math.random() * 120);
var crystalValue1 = 1 + Math.floor(Math.random() * 12);
var crystalValue2 = 1 + Math.floor(Math.random() * 12);
var crystalValue3 = 1 + Math.floor(Math.random() * 12);
var crystalValue4 = 1 + Math.floor(Math.random() * 12);
var userScore = 0;



// scoreboard variables
var wins = 0;
var losses = 0;
$(document).ready(function() {

function win() {
    alert("you won!");
    wins++
    $('#scoreboard-wins').html("Wins: " + wins);
    reset();
}

function lose() {
    alert("bummer, you lost.");
    losses++
    $('#scoreboard-losses').html("Losses: " + losses);
    reset();
}




// Main function to start and run the game

$("#computer-random-number").html(computerRandomNumber);
    
function game() {
    if(userScore == computerRandomNumber){
        win();
        reset();
    } else if (userScore > computerRandomNumber){
        lose();
        reset();
    }
}
    
// Increase the user score every time a crystal button is clicked
    $('#cry1').on('click', function() {
        userScore += crystalValue1;
        $('#current-score').html(userScore);
        console.log(crystalValue1);
        game();
    });

    $('#cry2').on('click', function() {
        userScore += crystalValue2;
        $('#current-score').html(userScore);
        console.log(crystalValue2);
        game();
    });

    $('#cry3').on('click', function() {
        userScore += crystalValue3;
        $('#current-score').html(userScore);
        console.log(crystalValue3);
        game();
    });

    $('#cry4').on('click', function() {
        userScore += crystalValue4;
        $('#current-score').html(userScore);
        console.log(crystalValue4);
        game();
    });

    function reset() {
        computerRandomNumber = 19 + Math.floor(Math.random() * 120);
        $("#computer-random-number").html(computerRandomNumber);
        crystalValue1 = 1 + Math.floor(Math.random() * 12);
        crystalValue2 = 1 + Math.floor(Math.random() * 12);
        crystalValue3 = 1 + Math.floor(Math.random() * 12);
        crystalValue4 = 1 + Math.floor(Math.random() * 12);
        userScore = 0;
        $('#current-score').html(userScore);
    }
});