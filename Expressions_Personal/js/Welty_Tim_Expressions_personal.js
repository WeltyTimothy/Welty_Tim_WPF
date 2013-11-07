// Timothy Welty 11/07/2013
var diapers = ["diapers a year"]
var amount = prompt("We are calculating how much diapers cost you. Please enter the purchasing price");
var box = prompt("Please enter how many boxes of diapers you buy a month.");
var month = prompt("Please enter how many months out of a year you buy diapers.");
var price = amount * box * month;//calculates with that info is going be
console.log(price, diapers[0]);
var result = "The price of your yearly diaper buying is $ " + price + " a year"
alert(result);