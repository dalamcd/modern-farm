import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"

const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();

console.log(yearlyPlan);
console.log(asparagusSeed)
console.log(cornSeed)

addPlant( asparagusSeed );

let plantList = usePlants();
console.log(plantList);

addPlant( cornSeed );
plantList = usePlants();
console.log(plantList);