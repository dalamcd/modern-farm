let growingPlants = [];

export const addPlant = (seedObj) => {
    if( Array.isArray(seedObj) ) {
        for( const seed of seedObj ) {
            growingPlants.push(seed);
        }
    } else {
        growingPlants.push(seedObj);
    }
}

export const usePlants = () => {
    return growingPlants.slice();
}