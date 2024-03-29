// >>>>>>>>>>>>>>>>>>>>>>>>PART1: Growing Pains<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//This part can be completed creating functions and using JavaScript methods. 
//However, in this case only knowledge taught in class so far is applied.

console.log("\n>>>>>>>>>>>>>>>>>  PART 1: Growing Pains  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

//Create variables with provided data
const areaRadius = 5;
const PI = 3.1415;
let numberOfWeeks = 1;
const minSpacePlant = 0.8;
let initialNumberOfPlants = 20;

// Calculate the area
const area = PI * areaRadius **2;


// Calculate maximum number of plants that can fit into that area
const maxNumPlantsInArea = area / minSpacePlant;

// Results for 1 week
let numberOfPlants = initialNumberOfPlants * 2;
console.log("Result for 1 week:")

// Create conditions in order to make decisions and display them. I assumed 50% and 80% are included in the number of plants
if(numberOfPlants > maxNumPlantsInArea * 0.8){
    console.log("Pruned");
}
else if(numberOfPlants >= maxNumPlantsInArea * 0.5 && numberOfPlants <= maxNumPlantsInArea * 0.8) {
    console.log("Monitored");
}
else {
    console.log("Planted");
}


// Results for 2 weeks
numberOfPlants *= 2;
// Create conditions in order to make decisions and display them
console.log("Result for 2 week:")
if(numberOfPlants > maxNumPlantsInArea * 0.8){
    console.log("Pruned");
}
else if(numberOfPlants >= maxNumPlantsInArea * 0.5 && numberOfPlants <= maxNumPlantsInArea * 0.8) {
    console.log("Monitored");
}
else {
    console.log("Planted");
}


// Results for 3 weeks
numberOfPlants *= 2;
console.log("Result for 3 weeks:")
// Create conditions in order to make decisions and display them
if(numberOfPlants > maxNumPlantsInArea * 0.8){
    console.log("Pruned");
}
else if(numberOfPlants >= maxNumPlantsInArea * 0.5 && numberOfPlants <= maxNumPlantsInArea * 0.8) {
    console.log("Monitored");
}
else {
    console.log("Planted");
}






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Part 2: Thinking Bigger<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log("\n>>>>>>>>>>>>>>>>>  PART 2: Thinking Bigger  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
// Calculate the area taken by the plants
initialNumberOfPlants = 100;

//Calculate the number of plants after 10 weeks starting with 100 plants
let numberOfPlantsAfter10Weeks = initialNumberOfPlants * 2 ** 10;

// Calculate the area taken by plants after 10 weeks
let areaTakenByPlants = minSpacePlant * numberOfPlantsAfter10Weeks;

// Calculate additional space required for all plants
let aditionalSpace = areaTakenByPlants - (minSpacePlant * maxNumPlantsInArea);

console.log(`The space required for the plants after 10 weeks with an initial amount of 100 plants is ${aditionalSpace} square meters.`);

// Calculate radius of total area after 10 weeks
let radiusAfter10Weeks = (areaTakenByPlants / PI) **0.5;
console.log(`The radius after 10 weeks with an initial amount of 100 plants is ${radiusAfter10Weeks} meters.\n`);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Part 3: Errors in Judgement<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>  PART 3: Errors in Judgement  <<<<<<<<<<<<<<<<<<<<<<<<<");

// Handle error if area required is bigger than area available

try {
    if ( area >= areaTakenByPlants){
       console.log("There is space for the plants")
    }
    else {
        throw "Error - Not enough space";
    }        
}
catch (error) {
    console.log(error);
}
console.log("If this is printed, the try...catch block works.");
