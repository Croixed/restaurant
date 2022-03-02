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

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'About Us', 'content-title')
  const contentText = component('div', 'Ethically sourced', 'content-text');

  const homeContent = component('div', '', 'home-content');
  
  homeContent.appendChild(contentTitle);
  homeContent.appendChild(contentText);
  mainContent.appendChild(homeContent);
  return mainContent
}