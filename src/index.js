import "./styles.css";
import {renderHome} from "./home-tab.js";
import {renderMenu} from "./menu-tab.js";
import {renderAbout} from "./about-tab.js";

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
    renderMenu();
});

aboutBtn.addEventListener('click', () => {
    clearContent();
    renderAbout();
});