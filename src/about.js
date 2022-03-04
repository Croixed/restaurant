import Canned from './canned.jpeg';

export const aboutTwo = () => {
  console.log('test about.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

export const aboutGen = () => {

  const myImage = new Image();
  myImage.src = Canned;
  myImage.classList.add("about-img");

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'About Us', 'content-title')
  const contentText = component('div', 'Don\'t live nearby? Order our Vegan Meats in the mail!', 'content-text');

  const aboutContent = component('div', '', 'about-content');
  
  aboutContent.appendChild(contentTitle);
  aboutContent.appendChild(contentText);
  aboutContent.appendChild(myImage);
  mainContent.appendChild(aboutContent);
  return mainContent
}