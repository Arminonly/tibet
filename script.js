let close = document.querySelector('.modal__body-close');
let modalWindow = document.querySelector('.modal');
let burger = document.querySelector('.header__nav-burger');

burger.addEventListener('click', () => {
  modalWindow.style.display = 'block';
});

close.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});
