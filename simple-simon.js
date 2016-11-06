$(document).ready(function () {
    "use strict";


    var red = document.getElementById("top-left-square");           //Assigning variables to all four squares
    var blue = document.getElementById("top-right-square");
    var green = document.getElementById("bottom-left-square");
    var yellow = document.getElementById("bottom-right-square");
    red.addEventListener("click", flashRed);                        //Assigning event listeners to each square
    blue.addEventListener("click", flashBlue);
    green.addEventListener("click", flashGreen);
    yellow.addEventListener("click", flashYellow);
    var roundCounter = 1;           //Counter to keep track of number of rounds
    var simonSequence = [];         //Array containing all of the random numbers which make up the game sequence to be repeated
    var playersSequence = [];       //Array containing all of the squares clicked by player
    var squares = $(".squares");

    function flashRed() {       //Function to animate the red square during simonSequence or when clicked by user
        $("#top-left-square").animate({
            opacity: 1
        }, 350).animate({
            opacity: .25
        });
    }

    function flashBlue() {      //Function to animate the blue square during simonSequence or when clicked by user
        $("#top-right-square").animate({
            opacity: 1
        }, 350).animate({
            opacity: .25
        });
    }

    function flashGreen() {     //Function to animate the green square during simonSequence or when clicked by user
        $("#bottom-left-square").animate({
            opacity: 1
        }, 350).animate({
            opacity: .25
        });
    }

    function flashYellow() {    //Function to animate the yellow square during simonSequence or when clicked by user
        $("#bottom-right-square").animate({
            opacity: 1
        }, 350).animate({
            opacity: .25
        });
    }


    $("#start-button").on("click", function (event) {   //When start button is clicked, a new game will start and button will be hidden
        event.preventDefault();
        $("#start-button").hide();
        newRound();
    });
    function newRound() {   //Function that runs for every new round
        document.getElementById("belowgame").innerHTML = "Current Round: " + roundCounter;  //Round information replaces button below game board during game play
        var randomNumber = Math.floor(Math.random() * 4) + 1; //Selecting a random number from 1-4. Each number corresponds to a different square
        var i = 0;  //Counter used as an index for simonSequence array
        simonSequence.push(randomNumber);   //pushing each new random number into the simonSequence array
        console.log("The simon sequence is " + simonSequence);
        var animationId = setInterval(function () {     //Delaying the animation of each square in the simonSequence so that they do not all flash at the same time
            switch (simonSequence[i]) {
                case 1:         //If random number in simon sequence at index of i is 1, then red will animate
                    flashRed();
                    break;

                case 2:         //If random number in simon sequence at index of i is 2, then blue will animate
                    flashBlue();
                    break;

                case 3:         //If random number in simon sequence at index of i is 3, then green will animate
                    flashGreen();
                    break;

                case 4:         //If random number in simon sequence at index of i is 4, then yellow will animate
                    flashYellow();
                    break;
            }
            i++;                //1 is added after each animation so that next number in array is compared and appropriate square is animated
            if (i >= simonSequence.length) {    //If the length of the simonSequence array is equal to i then last number has been reached and delay can be turned off
                clearInterval(animationId);
            }
        }, 500);
        roundCounter++;         //1 is added after each round
    }

    var index = 0;  //counter to keep track of index number of playersSequence
    function playerSequence(currentClick) {
        playersSequence.push(currentClick);     //pushing the number of each square clicked by user into the playersSequence array
        if (currentClick == simonSequence[index] && simonSequence.length - 1 == index) {  //if clicked square number at index matches the simon sequence square number at the same index and it is the last item in the array then go to next round
            playersSequence = [];  //reset playersSequence for next round
            index = 0;
            setTimeout(newRound, 1500); // 1.5 second interval between rounds
        }
        else if (currentClick == simonSequence[index] && simonSequence.length - 1 != index) {  //if it is not the last item in the sequence, then keep clicking and comparing
            index++;
        }
        else                            //If numbers don't match, then the wrong square was clicked and game is over
            alert("YOU CHOSE THE WRONG SQUARE! YOU LOSE! GOOD DAY, SIR!");
    }

    squares.click(function () {
        playerSequence($(this).data("number"));
    });
});