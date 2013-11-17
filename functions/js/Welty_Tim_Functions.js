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
	console.log(area + 'square feet');
}

//Function Invocation

function outptMsg(){
	console.log('hello world');
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
}

calcArea();
calcArea();
calcArea();

//Variable Scope

function outptMsg(){
	console.log('hello world');
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
}