export const Catalog = (harvest) => {

    const contentElement = document.querySelector("main");
    let catalogHTML = "";

    for(const plant of harvest){
        catalogHTML += `<section class="plant">${plant.type}</section>`;
    }

    contentElement.innerHTML += catalogHTML;
}