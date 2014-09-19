

// Allow user to select number to play by
var userChoice = prompt("Choose a number to play \"FizzBuzz\"");
var num = parseInt(userChoice, 10);
var valueIsNaN = (num !== num)


var runGame = function(num){

	// while(valueIsNaN === false){
	// 	// alert("Sorry, This is not a number, please try again and choose an actual integer number!");
	// 	// prompt("Choose a number to play \"FizzBuzz\"");
	// 	console.log("test");
	// }

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
};



runGame();	





// user prompted to enter number
// create 1 named function that takes the inputed integer as argument and runs the game
// convert inputed value from string to number
// create conditonal if number is NaN, alert for a number