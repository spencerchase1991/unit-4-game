// need 4 crystals
// a random amount
// each crysal needs random amount
// a new number needs to be generated everytime clicked on crystal
// score needs to be adding the previous amount until hits the total score 
// until equal to total
// if not equal alert lose -- if equal say win
//reset game

var randomResult = "";
var lose = 0;
var win = 0;
var counter = 0;

var resetAndStart = function () {

    //empty value before each start
    $(".crystals").empty();

    //crystal image array
    var images = ['blue.jpg', 'pink.jpg', 'purple.jpg', 'white.jpg'];

    //setting random values for each crystal
    randomResult = Math.floor(Math.random() * 69) + 30;
    $("#result").html('Random Number: ' + randomResult);
    $("#counter").html('Total Score: ' + counter);
    
    
    for (var i = 0; i < 4; i++) {

        var randomNumber = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
 
      crystal.attr({
            "class": 'crystal',
            "data-random": randomNumber
          
            
        });

       crystal.html("<img src='assets/images/"+images[i]+"'>")

        $(".crystals").append(crystal);
    }

    $("#win").html('Win Counter: ' + win);
    $("#lose").html('Loss Counter: ' + lose);
}

//$(images).attr("style","");

resetAndStart();

$(document).on('click', ".crystal", function () {


    var number = parseInt($(this).attr('data-random'));

    counter += number;
    console.log(counter);

    $("#result").html('Random Result: ' + randomResult);
    $("#counter").html('Counter: ' + counter);

    if (counter > randomResult) {
        alert("You lost!!");
        lose++;
        $("#lost").html(lose);
        counter = 0;

        resetAndStart();
    }
    else if (counter === randomResult) {
        alert("You win!!");
        win++;
        $("#win").html(win);
        counter = 0;

        resetAndStart();
    }

})