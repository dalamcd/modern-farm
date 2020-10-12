export const Catalog = (harvest) => {

    let count = {
        asparagus: 0,
        corn: 0,
        potato: 0,
        soybean: 0,
        sunflower: 0,
        wheat: 0
    }

    for(const plant of harvest) {
        switch(plant.type) {
            case "Asparagus":
                count.asparagus++;
                break;
            case "Corn":
                count.corn++;
                break;
            case "Potato":
                count.potato++;
                break;
            case "Soybean":
                count.soybean++;
                break;
            case "Sunflower":
                count.sunflower++;
                break;
            case "Wheat":
                count.wheat++;
                break;
        }
    }

    const contentElement = document.querySelector("main");
    let catalogHTML = `
    <p>Asparagus: ${count.asparagus}</p>
    <p>Corn: ${count.corn}</p>
    <p>Potato: ${count.potato}</p>
    <p>Soybean: ${count.soybean}</p>
    <p>Sunflower: ${count.sunflower}</p>
    <p>Wheat: ${count.wheat}</p>`;

    // for(const plant of harvest){
    //     catalogHTML += `<section class="plant">${plant.type}</section>`;
    // }

    contentElement.innerHTML += catalogHTML;
}