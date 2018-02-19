const catArray = [
    {
        name: 'Boba',
        favouriteFood: 'sock fluff',
        image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
    },
    {
        name: 'Barnaby',
        favouriteFood: 'tuna',
        image: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'
    },
    {
        name: 'Max',
        favouriteFood: 'Whiskas',
        image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
    },
    {
        name: 'Charlie',
        favouriteFood: 'Sheba',
        image: 'himalayan_cat.jpg'
    }

]

const app = function () {
 catArray.forEach(function (cat, index) {
     addCat(cat.name, cat.favouriteFood, cat.image)
 });


    // addCat('Charlie', 'Sheba', 'himalayan_cat.jpg');

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
    foodItem.innerText = 'Favourite food: ' + favouriteFood;
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