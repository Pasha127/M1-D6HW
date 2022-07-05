//name
let fName = "Paul";
let surname = "Levitsky";
let fullName = (fName+" "+surname);
console.log("Hello, my name is", fullName+".");
//age
let age = 100;
let currentYear = 2022;
let birthYear = currentYear-age;
console.log("I was born in",birthYear+".\n");
console.log("Here is how I make a mean carbonara.\n");
//Extra
let carbonara = null;
let spaghetti = 400;
let guanciale = 250;
let eggYoke = 6;
let cheese = 50;
let blkPepper = 4;
console.log("Cut guanciale", guanciale+"g");
let eggCheese = eggYoke+cheese+guanciale;
console.log("Mix", eggYoke, "egg yokes, with",cheese+"g","Pecorino Romano.");
let quarterOfPepper = .25* blkPepper;
console.log("Add", quarterOfPepper ," pepper to the mix.");
let mix = quarterOfPepper+eggCheese;
let spoonsWater = 2;
mix += spaghetti;
console.log("Add the Spaghetti."); 
console.log("Add", spoonsWater, "spoons of water to the mix.")
mix += spoonsWater;
console.log("add the rest of the pepper (", blkPepper-quarterOfPepper,")." )
mix+=(blkPepper-quarterOfPepper);
carbonara=mix;
console.log("Serve", carbonara+"g","of carbonara.");

//sum has 2 extra grams from the 2 added spoons of water. 

