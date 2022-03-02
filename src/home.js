import Steak from './steak.png';

const mySteak = new Image();
mySteak.src = Steak;
// console.log(mySteak);

export const homeGen = () => {
  console.log('test home.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

export const homeTwo = () => {
  const lineBreak = document.createElement('br');

  const mainContent = component('div', '', 'main-content');
  const bodyText = 'Welcome to Vegan Steaks'
  const homeContent = component('div', bodyText, 'home-content');
  homeContent.appendChild(lineBreak);
  homeContent.appendChild(mySteak);
  mainContent.appendChild(homeContent);
  return mainContent
}