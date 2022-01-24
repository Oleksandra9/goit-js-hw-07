import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('ul.gallery');

const galleryCards = galleryItems.map(createGalleryCard).join('');
galleryEl.insertAdjacentHTML('afterbegin', galleryCards);

function createGalleryCard({ description, preview, original }) { 
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
};

let gallerySlider = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });