import './style.css';
import homeGen from './home.js';
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

const restaurant = component('div', 'Vegan Steaks', 'restaurant')

const home = component('div', 'Home', 'home');
const menu = component('div', 'Menu', 'menu');
const aboutUs = component('div', 'About Us', 'about-us');

const links = component('div', '', 'links');
links.append(home, menu, aboutUs);
links.onclick = homeGen;
header.append(restaurant, links);

//title.onclick = printMe;
const mainContent = component('div', '', 'main-content');




// sample main content for the first Home page
const bodyText = 'Welcome to Vegan Steaks'
const homeContent = component('div', bodyText, 'home-content');
homeContent.appendChild(lineBreak);
homeContent.appendChild(mySteak);
mainContent.appendChild(homeContent);





const footer = component('div', 'footer', 'footer');


contents.append(header, mainContent, footer);
// contents.appendChild(header);


