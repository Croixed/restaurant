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
const menuGenerator = (image, price, name, desc) => {
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

  const menuOne = menuGenerator(Steak, '39.99', 'grass-fed steak', 'description goes here words words words words words');
  const menuTwo = menuGenerator(SteakTwo, '49.99', 'hay-fed steak', 'description goes here words words words words words');
  const menuThree = menuGenerator(SteakTwo, '79.99', 'chicken-fed steak', 'description goes here words words words words words');
  const menuFour = menuGenerator(Steak, '149.99', 'pork-fed steak', 'description goes here words words words words words');


  const mainContent = component('div', '', 'main-content', 'grass-fed steak');
  const contentTitle = component('div', 'Menu ', 'content-title');
  const contentText = component('div', 'Vegan Steaks:', 'content-text');
  const menuContent = component('div', '', 'menu-content');

  const menuWrapper = component('div', '', 'menu-wrapper');
  menuWrapper.append(menuOne, menuTwo);

  const menuWrapper2 = component('div', '', 'menu-wrapper');
  menuWrapper2.append(menuThree, menuFour);
  
  menuContent.append(contentTitle, contentText, menuWrapper, menuWrapper2);
  mainContent.appendChild(menuContent);
  return mainContent
}