import Steak from './steak.png';
import Dash from './dash.svg';

/* const mySteak = new Image();
mySteak.src = Steak; */

export const homeTwo = () => {
  console.log('test home.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

export const homeGen = () => {
  const mySteak = new Image();
  mySteak.src = Steak;
  mySteak.classList.add("home-img");
  const mySteak2 = mySteak.cloneNode(true);

  const myDash = new Image();
  myDash.src = Dash;

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Welcome to Vegan Steaks', 'content-title')
  const contentText = component('div', 'Home of the only Vegan Steaks! How are our steaks vegan? We taught our cattle to only eat organic, ethically sourced, vegan foods. It took many years of training and genetic modifications using CRISPR to reach this point, and now we are willing to sell you the results!', 'content-text');
  const homeContent = component('div', '', 'home-content');
  
  homeContent.append(contentTitle, contentText, myDash, mySteak, mySteak2)
  mainContent.appendChild(homeContent);
  return mainContent
}