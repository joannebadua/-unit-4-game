$(document).ready(function () {
    var wins = 0;
    var loss = 0;
    var binTotalPressed = 0;
    // var firstBin = $("#1-paper");
    // var buttonValue =;
    // var userScore = "";
    // Computer creates a random number (19-120) as a goal for the player to match 
    // with accumulated points, then displays Random variable in text connected
    // to html id randomNumber
    var Random = Math.floor(Math.random() * 101+19);
    $('#randomNumber').text(Random);
    var recycleRandom = Math.floor(Math.random() * 12+1);

    $("#binOne").on("click", function () {
        // need to add results/whats going to happen when binOneTwoThreeFour clicked such as 
        // 1) adding Score inside and on the display.
        // 2) determining if this Score matches the Goal number
        // *break this down even smaller*
        // 1) each recycle bin needs a random number (sneak number inside HTML) a) can we make a 
        // random number

    });

    // reset

    });