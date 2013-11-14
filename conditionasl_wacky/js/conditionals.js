// Timothy Welty 11/13/2013

var evaporation = ["humidity"]
var fear = prompt("How many ducks will scare you?");
var attack = prompt("How many ducks can you take on by yourself?");
var quantity = prompt("How many do you see outside?");
var total = quantity - attack ;//calculates what that info is going be
 	if(quantity - attack >= fear ){ 
		//this will print out if the code is false
		console.log("TOO MANY DUCKS!") 
}
	else{//this will print out if the code is true
		console.log("It is safe to go outside...for now");
	}

var result = "There are " + total + " ducks outside. You better take them out quickly!"
console.log(total, evaporation[0]);
alert(result);