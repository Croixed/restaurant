import Steak from './steak.png';

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

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Welcome to Vegan Steaks', 'content-title')
  const contentText = component('div', 'Home of the only Vegan Steaks! How are our steaks vegan? We taught our cattle to only eat organic, ethically sourced, vegan foods. It took many years of training and genetic modifications using CRISPR to reach this point, and now we are willing to sell you the delicious results!', 'content-text');

  const homeContent = component('div', '', 'home-content');
  const doorDash = component('button', 'order on DoorDash', 'door-button')
  
  homeContent.appendChild(contentTitle);
  homeContent.appendChild(contentText);
  homeContent.appendChild(doorDash);
  homeContent.appendChild(mySteak);
  const mySteak2 = mySteak.cloneNode(true);
  homeContent.appendChild(mySteak2);
  mainContent.appendChild(homeContent);
  return mainContent
}