export const menuTwo = () => {
  console.log('test menu.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

export const menuGen = () => {

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Menu ', 'content-title')
  const contentText = component('div', '(coming soon)', 'content-text');

  const menuContent = component('div', '', 'menu-content');
  
  menuContent.appendChild(contentTitle);
  menuContent.appendChild(contentText);
  mainContent.appendChild(menuContent);
  return mainContent
}