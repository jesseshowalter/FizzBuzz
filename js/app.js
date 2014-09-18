$(document).ready(function(){

	// Allow user to select number to play by
	var userChoice = prompt("Choose a number to play \"FizzBuzz\"");
	// Alert them of the game starting
	alert("You Chose to play FizzBuzz up to " + userChoice + " , Ready to get started?");
	
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

});
