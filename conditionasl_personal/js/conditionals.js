// Timothy Welty 11/13/2013
var evaporation = [""]
var heat = prompt("what is the temperature now?");
var time = prompt("What time is it?.");
var humidity = prompt("How humid is it outside?");
var total = heat && time * humidity;//calculates what that info is going be
 	if(time && heat * humidity ){ 
		//this will print out if the code is false
		console.log("It is too muggy go back inside!") 
}
	else{//this will print out if the code is true
		console.log("Awesome! We can fit that right in there. It'll be tight though");
	}
console.log(total, evaporation[0]);
var result = "The price of your yearly diaper buying is $ " + price + " a year"
alert(result);