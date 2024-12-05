import "./styles.css";
import {homeContent, homeTitle, openingText} from "./home-tab.js";
import {menuContent, menuTitle} from "./menu-tab.js";
import {aboutContent, aboutTitle} from "./about-tab.js";

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const aboutTab = document.querySelector('.about');

homeTab.addEventListener('click', () => {
    menuContent.remove();
    aboutContent.remove();
    homeContent.append(homeTitle, openingText);
    content.append(homeContent);
});

menuTab.addEventListener('click', () => {
    homeContent.remove();
    aboutContent.remove();
    menuContent.append(menuTitle);
    content.append(menuContent);
});

aboutTab.addEventListener('click', () => {
   homeContent.remove();
   menuContent.remove();
   aboutContent.append(aboutTitle);
   content.append(aboutContent);
});