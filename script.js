const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
const menu = document.createElement('div');
menu.classList.add('menu');
const menuList = document.createElement('ul');
menuList.innerHTML = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contact</a></li>
`;
menu.appendChild(menuList);
menuContainer.appendChild(menu);
document.body.appendChild(menuContainer);

menuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
  menuContainer.style.opacity = '1';
});

menuContainer.addEventListener('click', () => {
  menuContainer.style.display = 'none';
  menuContainer.style.opacity = '0';
});

menuContainer.addEventListener('click', () => {
    menu.classList.add('menu-close');
    setTimeout(() => {
      menuContainer.style.display = 'none';
      menu.classList.remove('menu-close');
    }, 500);
  });
