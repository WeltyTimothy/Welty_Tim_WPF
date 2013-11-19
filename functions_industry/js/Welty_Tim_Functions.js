//Timothy Welty 11/19/2013

var alarm = prompt("Please enter in military time what your alarm is set to wake up.")//gives a prompt to enter a value or given
var shower =prompt("Please enter in military time how long it takes to shower.") 
var traffic = prompt("Please enter in military time how long it takes to get to work.") 

if (alarm + shower + traffic >= 0900){//is the given equation to be solved via javascript
		console.log("You made it to work on time!");
}
	else{
		console.log("You are late and are docked pay");
}

(alarm + shower + traffic >= 0900) ? console.log("You made it to work on time!") : console.log("You are late and are docked pay");