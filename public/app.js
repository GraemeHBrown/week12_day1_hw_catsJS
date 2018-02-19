const app = function () {

    addCat('Charlie', 'Sheba', 'himalayan_cat.jpg');

}

function addCat(name, favouriteFood, image) {
    const catItemContainer = createCatItemContainer();
    const nameItem = createNameItem(name);
    const foodItem = createFoodItem(favouriteFood);
    const imgItem = createImageItem(image);
    const catSection = document.getElementById('cats');
    appendElements(catSection, catItemContainer, nameItem, foodItem, imgItem);
}

function createImageItem(image) {
    const imageItem = document.createElement('li');
    const imageTag = document.createElement('img');
    imageTag.width = 500;
    imageTag.src = image;
    imageItem.appendChild(imageTag);
    return imageItem;
}


function createFoodItem(favouriteFood) {
    const foodItem = document.createElement('li');
    foodItem.innerText = 'Favourite food: '+ favouriteFood;
    return foodItem;
}

function createNameItem(name) {
    const listItem = document.createElement('li');
    listItem.innerText = 'Name: ' + name;
    return listItem;
}

function createCatItemContainer() {
    const catListContainer = document.createElement('ul');
    catListContainer.classList.add('cat');
    return catListContainer;
}

function appendElements(catSection, catItemContainer, nameItem, foodItem, imgItem) {
    catItemContainer.appendChild(nameItem);
    catItemContainer.appendChild(foodItem);
    catItemContainer.appendChild(imgItem);
    catSection.appendChild(catItemContainer);
}


document.addEventListener("DOMContentLoaded", app);