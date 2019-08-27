'use strict';

import galleryItems from './gallery-items.js';

function createHtmlGaleryItem(galleryItemObject) {
  const { preview, original, description } = galleryItemObject;
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="./img/no-preview.jpg" data-lazy="${preview}" data-source="${original}" width="340" alt="${description}" />
      <span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span>
    </a>
  </li>
`;
}

function createHtmlGalery(arrayGaleryObject) {
  return arrayGaleryObject.map(galleryItem => createHtmlGaleryItem(galleryItem)).join('');
}

function addToElemenAfterbegin(html, selector) {
  const queryElement = document.querySelector(selector);
  queryElement.insertAdjacentHTML('afterbegin', html);
}

addToElemenAfterbegin(createHtmlGalery(galleryItems), '.gallery');

// ========== Galery LiteBox ==========

// Открытие
function openModal() {
  const openLightbox = document.querySelector('div.lightbox');
  openLightbox.classList.add('is-open');
  window.addEventListener('keydown', handlKeyPress);
}
// Закрытие
function closeModal() {
  document.querySelector('div.lightbox').classList.remove('is-open');
  window.removeEventListener('keydown', handlKeyPress);
  const imgiLghtboxResset = document.querySelector('.lightbox___image');
  imgiLghtboxResset.setAttribute('alt', ' ');
  imgiLghtboxResset.setAttribute('src', ' ');
}
// Колбек для keydown
function handlKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

// обработка процесса открытие окна lightbox
function lightboxOpenModal(elementForLightbox) {
  const imgReplase = document.querySelector('.lightbox___image');
  const source = elementForLightbox.dataset.source;
  const alt = elementForLightbox.getAttribute('alt');
  imgReplase.setAttribute('alt', alt);
  imgReplase.setAttribute('src', source);
  document.querySelector('.lightbox__content').addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  });
  const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
  closeModalBtn.addEventListener('click', closeModal);

  openModal();
}

// обработчик клика на превю изображение
const handleClickImg = (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') return;
  lightboxOpenModal(target);
};

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', handleClickImg);

// ========== Lazy Load – отложенная загрузка изображений ==========

const lazyLoad = (target) => {
  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');
images.forEach((img) => {
  lazyLoad(img);
});
