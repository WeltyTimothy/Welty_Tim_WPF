// Timothy Welty 11/13/2013
var furnHeight = prompt("Please enter the height of the FURNACE COIL"); //telling me what the height of everything is
var padding = prompt("Please enter the height of the FURNACE PADDING");
var limit = prompt("Please enter the MAXIMUM HEIGHT allowed for Furnace placement"); //telling me what the limit will be for the job
var total = furnHeight + padding;
	if(furnHeight + padding >= limit){ 
		//this will print out if the code is false
		console.log("Sorry the coil won't fit there! it is", total - limit, "inches too big") 
}
	else{//this will print out if the code is true
		console.log("Awesome! We can fit that right in there. It'll be tight though");
	}
var result = "The total height of your Furnace Coil is " + total + //for some reason this is showing as undefined...when I have it defined.
alert(result);



