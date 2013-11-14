// Timothy Welty 11/13/2013
var evaporation = ["humidity"]
var heat = prompt("what is the temperature now?");
var time = prompt("What time is it?.");
var humidity = prompt("How humid is it outside?");
var allowed = 100
var total = heat && time * humidity;//calculates what that info is going be
 	if(time && heat * humidity >= allowed){ 
		//this will print out if the code is false
		console.log("It is too muggy go back inside!") 
}
	else{//this will print out if the code is true
		console.log("Well lets go party at the beach now!");
	}

var result = "It is % " + total + " humid"
console.log(total, evaporation[0]);
alert(result);