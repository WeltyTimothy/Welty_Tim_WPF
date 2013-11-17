//functions procedures and anonymous functions


// Basic Function 
/* function functionName(){
	code the function runs
}*/

function outptMsg(){
	console.log('hello world');
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area + ' square feet');
}

//Function Invocation

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

//Variable Scope
var width = 5; //scoped out of the function

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area + ' square feet');
}
console.log(width + ' square feet');//scoped to the first width becase of basic code logic

//Arguments and Parameters