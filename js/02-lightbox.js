import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
</a> `).join('');


gallery.insertAdjacentHTML("afterbegin", markup)

gallery.addEventListener('click', event => {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };       
})

const lightbox = new SimpleLightbox(`.gallery a`, {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});