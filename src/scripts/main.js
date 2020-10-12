import { createPlan } from "./plan.js"
import { sortPlants, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
sortPlants();
const plantedField = usePlants();
console.log(plantedField);
const plantYield = harvestPlants(plantedField);
Catalog(plantYield);