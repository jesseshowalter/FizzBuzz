/*Just like in jQuery, we need to construct the DOM before we can
really do any JavaScript coding. So, using Vanilla JavaScript, we can
set window.onload equal to an anonymous function. 

So, when the window loads --> DO THIS STUFF FOR ME.
*/

window.onload = function () {
var theString = '';
var logWindow = document.getElementById('logWindow');

function fizzbuzz (number) {

	number = +(number);

	while(number == NaN || number % 1 != 0){
		number = prompt("Hey, that's not a number/whole number. Try again.");
	}


for(var i = 1; i <= number; i++) {


	/* FizzBuzz needs to be the first conditional. 
	Why? Because it has the most conditions. If we but % 3 or % 5 
	at the top, it would evaluate those first. We can't have that, now
	can we?

	*/
	if (i % 5 === 0 && i % 3 === 0){
		//fizzbuzz
		theString += 'Fizz-Buzz<br />';
	}

	else if (i % 3 === 0) {
		//fizz
		theString += 'Fizz<br />';
	}

	else if (i % 5 === 0) {
		//buzz
		theString += 'Buzz<br />';
	}

	else {
		//print number or print nothing
		theString += i + '<br />';
	}


}

logWindow.innerHTML = theString; //Append it to the string
}

fizzbuzz(prompt("Enter a number."));

};