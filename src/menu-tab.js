import pizzaImg from "./pizza.jpg";
import friesImg from "./fries.jpg";
import wingsImg from "./wings.jpg";

export const renderMenu = () => {
    const pizza = document.createElement('img');
    pizza.src = pizzaImg;
    pizza.classList.add('pizza-img');

    const fries = document.createElement('img');
    fries.src = friesImg;
    fries.classList.add('fries-img');

    const wings = document.createElement('img');
    wings.src = wingsImg;
    wings.classList.add('wings-img');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'Menu';

    const pizzaText = document.createElement('p');
    pizzaText.textContent = "Our savory pizzas begin with hand-rolled dough layered with generous portions of the world's finest ingredients!";
    pizzaText.classList.add('pizza-text');

    const friesText = document.createElement('p');
    friesText.classList.add('fries-text');
    friesText.textContent = "These savory homemade seasoned French fries are flavored with garlic salt, onion salt, paprika, and salt.";

    const wingsText = document.createElement('p');
    wingsText.classList.add('wings-text');
    wingsText.textContent = 'We have your favorite wings and sauces. Choose from 27 sauces and dry rubs!';

    menuContent.append(menuTitle, pizza, pizzaText, fries, friesText, wings, wingsText);
    content.append(menuContent);
}