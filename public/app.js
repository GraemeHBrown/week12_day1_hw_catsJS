const app = function () {
    //1. Create the parent container and it's class
    const catListContainer = document.createElement('ul');
    catListContainer.classList.add('cat')
    //2. Create the first child
    const firstListItem = document.createElement('li');
    firstListItem.innerText = 'Name: Charlie'
    //3. Create the second child element(favourite food)
    const secondListItem = document.createElement('li');
    secondListItem.innerText = 'Favourite food: Sheba';
    //4. Create the third child element (img)
    const thirdListItem= document.createElement('li');
    thirdListItem.innerHTML = '<img width="500" src="himalyan_catjpg.jpg">';
    //5. Append the list items to the list container
    catListContainer.appendChild(firstListItem);
    catListContainer.appendChild(secondListItem);
    catListContainer.appendChild(thirdListItem);
    //6. Add everything to the quotes list
    const catsSection = document.getElementById('cats');
    catsSection.appendChild(catListContainer);
    // firstListItem.style.backgroundColor = 'wheat';

}

document.addEventListener("DOMContentLoaded", app);