// JavaScript Document

//boolean variable
// if the child is old enough then "you can ride"
var oldEnough = false;
	if(oldEnough){
		//code preformed if the statement is true
		console.log("You can ride the roller coaster!"); 
}



//Relational Expressions
//if the kid is over 48 inches in height 
var kidHeight = 50;
var minHeight = 48;
	if(kidHeight > minHeight){
		//code preformed if the statement is true
		console.log("You can ride the roller coaster!"); 
}

//Conditions with Expressions
//if the kid is over 48 inches in height 
var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2
	if(kidHeight + sneakerLift > minHeight){
		//code preformed if the statement is true
		console.log("You can ride the roller coaster!"); 
}

//If statement Expressions
//if the kid is over 48 inches in height 
var kidHeight = 52;
var minHeight = 48;
	if(kidHeight > minHeight){
		//code preformed if the statement is true
		console.log("You can ride the roller coaster!");
}
	if(kidHeight <= minHeight){
		//code preformed if the statement is true
		console.log("Sorry kid you got some growing to do"); 
}

//Else statement Expressions
//if the kid is over 48 inches in height 
var kidHeight = 52;
var minHeight = 48;
	if(kidHeight > minHeight){
		//code preformed if the statement is true
	console.log("You can ride the roller coaster!");
}
	else{
		//code preformed if the statement is true
		console.log("Sorry kid you got some growing to do"); 
}

//Else if chain statement Expressions
//if the kid is over 48 inches in height 
var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45;
	if(kidHeight > minHeight){
		//You can ride!
	console.log("You can ride the roller coaster!");
} //you can ride with a parent present
	else if(kidheight > parentHeight){
		//code preformed if the statement is true
		console.log("You can ride but only with a parent present."); 
}
	else{
		//sorry you have growing to do
		console.log("Sorry kid you got some growing to do"); 
}


//if the price of the phone is less than budget AND our paycheck is over 300
var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

if(iPhonePrice < budget && payCheck < 300){
	console.log("We can Buy the Phone");
}
	else{
		console.log("No phone for you!");
}

//if the price of the phone is less than budget AND our paycheck is over 300
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery){
	console.log("We can Buy the Phone");
}
	else{
		console.log("No phone for you!");
}

/*Ternarie opeations
var gpa = 48
//if the gpa is over the min 2.0, the student can graduate
if (gpa > 2.0){
		console.log("You can graduate!");
}
	else{
		console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("Your GPA is too low!");*/	

var age = 6;
var book;
/*//if the child is under 10 he gets green eggs and ham otherwise he gets time machine
if(age < 10){
	book = "Green Eggs and Ham";
}
	else{
		book = "The Time Machine";
}*/
book = (age <10 ) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
	