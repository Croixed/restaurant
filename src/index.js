import './style.css';
import printMe from './print.js';
import Steak from './steak.png';

// create main element, append to 'body'
const contents = document.createElement('div');
contents.id = 'content';

// background testing
const background = document.createElement('div');
background.classList.add("bg");
document.body.appendChild(background);

// console.log(contents);
// const mySteak = new Image();
// mySteak.src = Steak;
// console.log(mySteak);

document.body.appendChild(contents);

// function to generate elements
function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

// generate the basic elements needed for webpage
const header = component('div', '', 'header');

const restaurant = component('div', 'Diner Name', 'restaurant')

const home = component('div', 'Home', 'home');
const menu = component('div', 'Menu', 'menu');
const aboutUs = component('div', 'About Us', 'about-us');

const links = component('div', '', 'links');
links.append(home, menu, aboutUs);
header.append(restaurant, links);

//title.onclick = printMe;
const mainContent = component('div', 'Title content content content content content content', 'main-content');
const footer = component('div', 'footer', 'footer');


contents.append(header, mainContent, footer);
// contents.appendChild(header);


