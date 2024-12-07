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
wingsText.textContent = 'We have your favorite wings and sauces. Choose from 27 sauces and dry rubs!'

export {menuContent, menuTitle, pizzaText, friesText, wingsText}