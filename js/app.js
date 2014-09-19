// user prompted to enter number
// create 1 named function that takes the inputed integer as argument and runs the game
// convert inputed value from string to number
// create conditonal if number is NaN, alert for a number


window.onload = function (){

	var fbString = '';
	var fbContainer = document.getElementById('fbContainer');

	function runGame(num){

		num = +(num);

		while(num == NaN || num % 1 != 0){
			num = prompt("Hey, that's not a number. Try again please.");
		}

		for(var i = 1; i <= num; i++){
		    if(i%15 === 0){
		    	fbString += "<li>Fizz Buzz!!!</li>";
		    }

		    else if (i%3 === 0) {
		    	fbString += "<li>Fizz</li>";
		    }

		    else if (i%5 === 0) {
		    	fbString += "<li>Buzz</li>";
		    }

		    else {
		    	fbString += "<li>" + i + "</li>";
		    }
		};
		
		fbContainer.innerHTML = fbString;
	};

	runGame(prompt("Choose a number to play \"FizzBuzz\""));
};