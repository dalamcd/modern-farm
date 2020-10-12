let growingPlants = [];
let id = 0;

export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)) {
        for(const seed of seedObj) {
            seed.id = id;
            growingPlants.push(seed);
            id++;
        }
    } else {
        seedObj.id = id;
        growingPlants.push(seedObj);
        id++;
    }
}

export const usePlants = () => {
    return growingPlants.slice();
}

export const sortPlants = () => {
    growingPlants.sort( (currentElement, nextElement) => {
        if(currentElement.type < nextElement.type) {
            return -1;
        } else if(currentElement.type > nextElement.type) {
            return 1;
        }
        return 0;
    });
}