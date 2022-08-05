import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`
<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div> `).join('');

gallery.insertAdjacentHTML("afterbegin", markup)

gallery.addEventListener('click', event => {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };
    const originalImg = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src= ${originalImg} width="800" height="600">
    `)

    instance.show()
    
})

// function createGallery(galleryItems) {
//     const markup = galleryItems.map(item => {
//         return `
// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
//         `

//     })
//     console.dir(markup);
// }



