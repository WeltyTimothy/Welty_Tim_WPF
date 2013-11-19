//Timothy Welty 11/19/2013
alert("Let's see how far and how fast you can get somewhere")
var timeLeft = prompt("How much time do you have left to travel?")
var speed = prompt("Please enter in your average speed.")//gives a prompt to enter a value or given
var miles =prompt("Please enter in how many miles it takes to get to destination.") 
var hours = miles / speed;
if (miles / speed >=timeLeft){
		alert("You  have gotten there too late...")
		console.log('you will get there ' + hours + ' hours too late');
}
	else{
		alert("You made it!")
		console.log('you will get there in ' + hours + ' hours. Good Job!');
}

(miles / speed >= timeLeft) ? console.log('you will get there ' + hours + ' hours too late') : console.log('you will get there in ' + hours + ' hours. Good Job!'); 

//tenary command to draw out the equation and tell me if I make it home or not
