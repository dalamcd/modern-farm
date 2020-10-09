import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

console.log(usePlants());