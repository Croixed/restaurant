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

//name ... ... price
//.. description ..
// ... image ...
menuGenerator = (image, price, name, desc) => {
  const MenuItem = component('div', '', 'menu-item');

  const itemName = component('span', name, 'item-name');
  const itemPrice = component('span', price, 'item-price');
  const itemDesc = component('div', desc, 'item-desc');
  const itemText = component('div', '', 'item-text');
  itemText.append(itemName, itemPrice, itemDesc);

  const myImage = new Image();
  myImage.src = image;
  myImage.classList.add("menu-img");

  MenuItem.append(itemText, myImage);
  return MenuItem;
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

  const menuTextOne = component('div', 'Item 1... ... 189.99', 'menu-text');
  const menuTextTwo = component('div', 'Item 2... ... 189.99', 'menu-text');

  menuOne.append(menuTextOne, mySteak2);
  menuTwo.append(menuTextTwo, mySteak);


  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Menu ', 'content-title')
  const contentText = component('div', 'Vegetarian Steaks:', 'content-text');
  const menuContent = component('div', '', 'menu-content');
  
  menuContent.append(contentTitle, contentText, menuOne, menuTwo);
  mainContent.appendChild(menuContent);
  return mainContent
}