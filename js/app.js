
var name = "Jesse";

// Allow user to select number to play by
var userChoice = prompt("Choose a number to play \"FizzBuzz\"");
// Alert them of the game starting
alert("You Chose to play FizzBuzz up to " + userChoice + " , Ready to get started?");

var runGame = function(numChoice){
	numChoice = +userChoice;
	// Conditional Logic for fizz an buzz and fizzbuzz
	for(var i = 1; i <= userChoice; i++){
	    if(i%15 === 0){
	    	$('ul').append("<li>Fizz Buzz!</li>");
	    }else if (i%3 === 0) {
	    	$('ul').append("<li>Fizz</li>");
	    }else if (i%5 === 0) {
	    	$('ul').append("<li>Buzz</li>");
	    }else {
	    	$('ul').append("<li>" + i + "</li>");
	    };
	}
	
	console.log("Game has been run " + numChoice);
	return numChoice;
};
runGame();



// user prompted to enter number
// create 1 named function that takes the inputed integer as argument and runs the game
// convert inputed value from string to number
// create conditonal if number is NaN, alert for a number