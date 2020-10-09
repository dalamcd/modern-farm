export const harvestPlants = (plantedField) => {

    const plantYield = [];

    for(const plant of plantedField){
        let plantOutput = plant.output;
        if(plant.type === "Corn")
            plantOutput = plantOutput / 2;
        for(let i = 0; i < plantOutput; i++) {
            plantYield.push(plant);
        }
    }

    return plantYield;
}