$(document).ready(function() {

targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var wins = 0;
var losses = 0;
var images = ["image1", "image2", "image3", "image4"];
totalScore = 0;
var gameover = false;
$("#randomnumber").html(targetNumber);

for (var i = 1; i <= images.length; i++) {
    crystalNumber1 = Math.floor(Math.random() * (12 - 1) + 1);
    $('#image1').attr({'crystalNumber': crystalNumber1})
    crystalNumber2 = Math.floor(Math.random() * (12 - 1) + 1);
    $('#image2').attr({'crystalNumber': crystalNumber2})
    crystalNumber3 = Math.floor(Math.random() * (12 - 1) + 1);
    $('#image3').attr({'crystalNumber': crystalNumber3})
    crystalNumber4 = Math.floor(Math.random() * (12 - 1) + 1);
    $('#image4').attr({'crystalNumber': crystalNumber4})
}

function resetCrystals() {
    for (var i = 1; i <= images.length; i++) {
        crystalNumber1 = Math.floor(Math.random() * (12 - 1) + 1);
        $('#image1').attr({'crystalNumber': crystalNumber1})
        crystalNumber2 = Math.floor(Math.random() * (12 - 1) + 1);
        $('#image2').attr({'crystalNumber': crystalNumber2})
        crystalNumber3 = Math.floor(Math.random() * (12 - 1) + 1);
        $('#image3').attr({'crystalNumber': crystalNumber3})
        crystalNumber4 = Math.floor(Math.random() * (12 - 1) + 1);
        $('#image4').attr({'crystalNumber': crystalNumber4})
    }
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#randomnumber").html(targetNumber);
    totalScore = 0;
    $("#scorebox").html(totalScore);
}

$(".image").click(function() {
    totalScore = totalScore + parseInt($(this).attr("crystalnumber"));
    $("#scorebox").html(totalScore);
    if (totalScore > targetNumber) {
        gameover = true;
        losses++;
        $("#losses").html(losses);
        resetCrystals()
    }
    else if (totalScore == targetNumber) {
        gameover = true;
        wins++;
        $("#wins").html(wins);
        resetCrystals()
    }
});





});
