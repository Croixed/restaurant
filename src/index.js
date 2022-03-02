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
const mySteak = new Image();
mySteak.src = Steak;
// console.log(mySteak);
const lineBreak = document.createElement('br');

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
const mainContent = component('div', '', 'main-content');

// sample main content for the first Home page
const homeContent = component('div', 'Looccaecat it anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'home-content');
homeContent.appendChild(lineBreak);
homeContent.appendChild(mySteak);
mainContent.appendChild(homeContent);



const footer = component('div', 'footer', 'footer');


contents.append(header, mainContent, footer);
// contents.appendChild(header);


