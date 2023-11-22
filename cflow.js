// >>>>>>>>>>>>>>>>>>>>>>>>PART1: Growing Pains<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Case1: Number of weeks is 1
const areaRadius = 5;
const PI = 3.1415;
// Calculate the area
const area = PI * areaRadius **2;
let numberOfWeeks = 1;

// Calculate maximum number of plants that can fit into that area
const minSpacePlant = 0.8;
const maxNumPlantsInArea = area / minSpacePlant;
let numberOfPlants = 20;

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


//Part 2: 
// Calculate the area taken by the plants
let areaTakenByPLants = minSpacePlant * numberOfPlants;