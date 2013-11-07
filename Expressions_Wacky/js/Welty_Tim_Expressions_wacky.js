// Timothy Welty 11/07/2013
var owls = ["Owls fit on the roller coaster"]
var amount = prompt("We are making a roller coaster for owls! Please tell us how many seats are in the roller coaster");
var cars = prompt("Please enter how many cars are there.");
var trains = prompt("Please enter how many trains are able to run at one time.");
var owl = ["Barn Owl", "Spotted Owl"]
var quantity = amount * cars * trains + owl[1];//calculates with that info is going be calculated
console.log(quantity, owls[0]);
var result = "" + quantity + "" + " can fit on this roller coaster! Flip what the zip! That's a lot of owls!"
alert(result);