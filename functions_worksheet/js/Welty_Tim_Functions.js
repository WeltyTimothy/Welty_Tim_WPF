//Timothy Welty 11/19/2013

beeSting(8.66666667, 200);

function beeSting(amount, weight){
	var stings = weight * amount;
	console.log('It will take ' + stings + ' beestings to kill you');
}

/* Basic Function 
 function functionName(){
	code the function runs
}

function outptMsg(){
	console.log('hello world');
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area + ' square feet');
}

Function Invocation

function outptMsg(){
	console.log('hello world');
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area + ' square feet');
}

calcArea();
calcArea();
calcArea();

Variable Scope
var width = 5; //scoped out of the function

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area + ' square feet');
}
console.log(width + ' square feet');//scoped to the first width becase of basic code logic

Arguments and Parameters
 function functionName(parameter1, parameter2){
	code the function runs
}

calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	console.log(area + 'square feet');
}

function dogYears(age){
	var dogYears = age * 7;
	console.log('sparky is ' + dogYears + ' years old');
	}
var age1 = 4;
dogYears(age1);
dogYears(5);

Returning Values
var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area;//spitting the info out but there isnt a place to store it
}
console.log(total);

Anonymous Functions (Closures)

var calcArea = function(width, height){//defining the parameters
	var area = width * height; 
	return area;
}
 
var a = calcArea(20, 30); //invoking
console.log(a);*/