import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (yearlyPlan) => {

    for(const row of yearlyPlan) {
        for(const plot of row) {
            switch(plot) {
                case "Asparagus":
                    addPlant(createAsparagus());
                    break;
                case "Corn":
                    addPlant(createCorn());
                    break;
                case "Potato":
                    addPlant(createPotato());
                    break;
                case "Soybean":
                    addPlant(createSoybean());
                    break;
                case "Sunflower":
                    addPlant(createSunflower());
                    break;
                case "Wheat":
                    addPlant(createWheat());
                    break;
            }
        }
    }
}