'use strict';

const thumbs = [...document.querySelectorAll('.list-item__link')];
const bigImage = document.querySelector('.gallery__large-img');

for (const thumb of thumbs) {
  thumb.addEventListener('click', (smth) => {
    smth.preventDefault();

    const link = smth.target.closest('a');

    bigImage.src = link.href;
  });
}
