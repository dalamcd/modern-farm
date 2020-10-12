let growingPlants = [];

export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)) {
        for(const seed of seedObj) {
            growingPlants.push(seed);
        }
    } else {
        growingPlants.push(seedObj);
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