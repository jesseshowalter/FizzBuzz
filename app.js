var userChoice = prompt("Choose a number to play \"FizzBuzz\"");
alert("You Chose to play FizzBuzz up to " + userChoice + " , Ready to get started?");
for(var i = 1; i <= userChoice; i++){
    if(i%15 === 0){
    	console.log("Fizz Buzz");
    }else if (i%3 === 0) {
    	console.log("Fizz");
    }else if (i%5 === 0) {
    	console.log("Buzz");
    }else {
    	console.log(i);
    };
}