//expresisons

var a = 2; //sets up the variable and definies it with a value of 2
var b;
b = a + 3; //appears to add 3 to a
console.log(b);

//age example

var yearBorn = 1991;
age = 2013 - yearBorn;
console.log(age); 

var remainder = 9 % 2;
console.log(remainder); 

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of all numbers diveded by amount there is

var average = (quiz1 + quiz2 + quiz3 + quiz4) / 4;
console.log(average);

/*var length = 7;
var width = 6;
var perimeter= length * 2 + width * 2;
console.log(perimeter);

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);

var firstName = "Timothy";
var lastName = "Welty";
var fullName = firstName + " " + lastName;
console.log(fullName);*/

var a = 6;
var b = 7;
var result = a + b;
console.log(result);

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

var areaCode = 407;
var firstPart = 790;
var lastPart = 2446;

var phoneNumber = "(" + String(areaCode) + ")" + (firstPart) +"-"+ (lastPart);
console.log(phoneNumber);

var a = 3;
/*a += 4;*/
//a ++; //a = a + 1 // a +=1
a --; //a = a - 1 // a -=1
console.log(a);