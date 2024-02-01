// * polifill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(cb, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      cb.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function(dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown__btn');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownListItem = dropdownList.querySelectorAll(
    '.dropdown__list-item'
  );

  dropdownBtn.addEventListener('click', e => {
    e.preventDefault();
    dropdownList.classList.toggle('dropdown__list--visible');
    dropdownBtn.classList.toggle('dropdown__btn-rotate-up');
  });

  dropdownListItem.forEach(el => {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownBtn.innerText = this.innerText;
      dropdownList.classList.remove('dropdown__list--visible');
      dropdownBtn.classList.remove('dropdown__btn-rotate-up');
    });
  });

  document.addEventListener(
    'click',
    e =>
      e.target !== dropdownBtn
        ? dropdownList.classList.remove('dropdown__list--visible')
        : null
  );

  document.addEventListener(
    'click',
    e =>
      e.target !== dropdownBtn
        ? dropdownBtn.classList.remove('dropdown__btn-rotate-up')
        : null
  );

  document.addEventListener(
    'keydown',
    e =>
      e.key === 'Escape'
        ? dropdownList.classList.remove('dropdown__list--visible')
        : null
  );
  document.addEventListener(
    'keydown',
    e =>
      e.key === 'Escape'
        ? dropdownBtn.classList.remove('dropdown__btn-rotate-up')
        : null
  );
});
