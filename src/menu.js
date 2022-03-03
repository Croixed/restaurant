import Steak from './steak.png';
import SteakTwo from './steakTwo.jpg';

export const menuTwo = () => {
  console.log('test menu.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

// this is really messy and I can definitely refactor it to stay DRY
export const menuGen = () => {
  const mySteak = new Image();
  mySteak.src = Steak;
  mySteak.classList.add("menu-img");
  const mySteak2 = mySteak.cloneNode(true);
  mySteak2.src = SteakTwo;

  const menuOne = document.createElement('div');
  menuOne.classList.add('menu-item');
  const menuTwo = menuOne.cloneNode(true);
  const menuThree = menuOne.cloneNode(true);
  const menufour = menuOne.cloneNode(true);

  menuOne.appendChild(mySteak2);
  menuTwo.appendChild(mySteak);


  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Menu ', 'content-title')
  const contentText = component('div', 'Vegetarian Steaks:', 'content-text');
  const menuContent = component('div', '', 'menu-content');
  
  menuContent.append(contentTitle, contentText, menuOne, menuTwo);
  mainContent.appendChild(menuContent);
  return mainContent
}