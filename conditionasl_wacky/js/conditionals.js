// Timothy Welty 11/13/2013

var ducks = prompt("How many ducks do you see outside");
var attack = prompt("How many ducks can you take on by yourself?");

//if the duck limit is under 100, we can go outside
if (ducks - attack >= ducks){
		console.log("TOO MANY DUCKS! STAY SAFE INDOORS");
}
	else{
		console.log("It is safe to go outside...for now!");
}

(ducks - attack <= ducks) ? console.log("TOO MANY DUCKS! STAY SAFE INDOORS") : console.log("It is safe to go outside...for now");
