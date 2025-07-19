import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createMarkup(arr) {
  return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
      return `
      <div class="wrap">
       <a class="gallery-item" href="${largeImageURL}"><img class="img" src="${webformatURL}" alt="${tags}" width="360px"></a
           >
            <ul class="list">
                <li class="list-item">
                  <p class="label">Likes</p>
                  <p class="value">${likes}</p>
                </li>
                <li class="list-item">
                  <p class="label">Views</p>
                  <p class="value">${views}</p>
                </li>
                <li class="list-item">
                  <p class="label">Comments</p>
                  <p class="value">${comments}</p>
                </li>
                <li class="list-item">
                  <p class="label">Downloads</p>
                  <p class="value">${downloads}</p>
                </li>
              </ul>
        
      </div>
      `;
    })
      .join("");
    
}