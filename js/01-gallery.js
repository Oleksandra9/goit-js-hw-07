import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function creatGalleryItemsMarkup(items) {

    return items.map(({original, preview, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
                />
            </a>
        </div>`
    ).join("");
    
}

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const modal = `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`;
    const modalShow = basicLightbox.create(modal);

    modalShow.show();


    window.addEventListener('keydown', event => {
         if (event.key === 'Escape') {
            modalShow.close();
        }
    });
    
};



