import './style.css';
import { homeGen } from './home.js';
import { homeTwo } from './home.js';
import { menuGen } from './menu.js';
import { menuTwo } from './menu.js';
import { aboutGen } from './about.js';

menuGen();

// create main element, append to 'body'
const contents = document.createElement('div');
contents.id = 'content';

// background testing
const background = document.createElement('div');
background.classList.add("bg");
document.body.appendChild(background);



document.body.appendChild(contents);

// function to generate elements
function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

// generate the basic elements needed for header
const header = component('div', '', 'header');
const restaurant = component('div', 'Vegan Steaks', 'restaurant')
const home = component('div', 'Home', 'home');
const menu = component('div', 'Menu', 'menu');
const about = component('div', 'About Us', 'about-us');
// put links in seperate div
const links = component('div', '', 'links');
links.append(home, menu, about);
header.append(restaurant, links);
// generate content from home.js
// let mainContent = homeTwo();
let mainContent = homeGen();
// mainContent = menuTwo();
// generate footer
const footer = component('div', 'footer', 'footer');

contents.append(header, mainContent, footer);



function homeFunc() {
  mainContent = homeGen();
  contents.innerHTML = '';
  contents.append(header, mainContent, footer);
  console.log('cleared');
}

function menuFunc() {
  mainContent = menuGen();
  contents.innerHTML = '';
  contents.append(header, mainContent, footer);
  console.log('cleared, w/ menu');
}

function aboutFunc() {
  mainContent = aboutGen();
  contents.innerHTML = '';
  contents.append(header, mainContent, footer);
  console.log('cleared about');
}

home.onclick = homeFunc;
menu.onclick = menuFunc;
about.onclick = aboutFunc;


mainContent = menuTwo();