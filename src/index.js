import "./styles.css";
import {renderHome} from "./home-tab.js";
import {renderMenu} from "./menu-tab.js";
import {renderAbout} from "./about-tab.js";
import pizzaImg from "./pizza.jpg";
import friesImg from "./fries.jpg";
import wingsImg from "./wings.jpg";


const content = document.querySelector('#content');
const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

const clearContent = () => {
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearContent();
    renderHome();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    const pizza = document.createElement('img');
    pizza.src = pizzaImg;
    pizza.classList.add('pizza-img');
    renderMenu();
});

aboutBtn.addEventListener('click', () => {
    clearContent();
    renderAbout();
});
