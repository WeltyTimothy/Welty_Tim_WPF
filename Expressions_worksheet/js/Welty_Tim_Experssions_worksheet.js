
//expresisons

var age = 4; //sets up the variable and definies it with a value of 4 (dogs age)
var b;
b = age * 7; //appears to multiply age by 7
console.log(b);

var slices = 8; //gives me the number of slices per pizza
var p = 3; // gives me the total amount of pizza bought
var people = 10; //number of people eating said pizza
var total;
total = slices * p / people; 
console.log(total);

var slices = 8; //gives me the number of slices per pizza
var p = 3; // gives me the total amount of pizza bought
var people = 10; //number of people eating said pizza
var whole = 2; //should be minus 2 to then times 2 by .4 but it won't read out correctly I need help with that please
var total;
total = ((slices * p / people) - whole) * people; 
// this problem should read ((8*3/10) -2)) *10 = 4 but is offputing 3.9 repeating
console.log(total);

var sum = [150,200,100,300,250].reduce(add, 0); //the array with my weekly grocery prices
function add(a, b) {
    return a + b;
}
console.log(sum); 
var days = 5;
average= sum / days;
console.log(average); //combined two problems to end up with a process of my total overhead averaged over 5 days.



