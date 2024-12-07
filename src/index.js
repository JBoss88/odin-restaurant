import "./styles.css";
import {homeContent, homeTitle, openingText} from "./home-tab.js";
import {menuContent, menuTitle, pizzaText, friesText, wingsText} from "./menu-tab.js";
import {aboutContent, aboutTitle, owner, established, faq, faqLink} from "./about-tab.js";
import pizzaImg from "./pizza.jpg";
import friesImg from "./fries.jpg";
import wingsImg from "./wings.jpg";

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const aboutTab = document.querySelector('.about');
let checkImg = true;

homeTab.addEventListener('click', () => {
    menuContent.remove();
    aboutContent.remove();
    homeContent.append(homeTitle, openingText);
    content.append(homeContent);
});

menuTab.addEventListener('click', () => {
    homeContent.remove();
    aboutContent.remove();
    if (checkImg === true) {
        const pizza = document.createElement('img');
        pizza.classList.add('pizza-img');
        pizza.src = pizzaImg;

        const fries = document.createElement('img');
        fries.classList.add('fries-img');
        fries.src = friesImg;

        const wings = document.createElement('img');
        wings.classList.add('wings-img');
        wings.src = wingsImg;

        menuContent.append(pizza, fries, wings);
        checkImg = false;
    }
    menuContent.append(menuTitle, pizzaText, friesText, wingsText);
    content.append(menuContent);
});

aboutTab.addEventListener('click', () => {
   homeContent.remove();
   menuContent.remove();
   faq.append(faqLink);
   aboutContent.append(aboutTitle, owner, established, faq);
   content.append(aboutContent);
});