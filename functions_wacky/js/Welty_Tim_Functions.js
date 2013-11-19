//Timothy Welty 11/19/2013

var pies = function(pie, banana){//defining the parameters
	var total = pie % banana; 
	return total;
}
 
var a = pies(36590, 15); //invoking
console.log('You should use roughly '+ a + ' bananas per pie');
