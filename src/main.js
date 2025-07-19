import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

let lightbox = null;

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements["search-text"].value.trim();
    if (userInput === "") {
        iziToast.warning({
            message: 'Unfortunately you cannot leave the input blank',
            position: 'topRight',
              messageColor: '#fff',
              titleColor: '#fff',
              color: '#ef4040',
              iconUrl: './img/bi_x-octagon-2.svg',
              maxWidth: 432
            });
        return
    }

    gallery.innerHTML = "";
    loader.classList.remove("hidden");
    getImagesByQuery(userInput)
        .then(res => {
            if (res.length === 0) {
              iziToast.show({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight',
              messageColor: '#fff',
              titleColor: '#fff',
              color: '#ef4040',
              iconUrl: './img/bi_x-octagon-2.svg',
              maxWidth: 432
              });
                return
            }
            
            gallery.innerHTML = createMarkup(res);
            setTimeout(() => {
            if (!lightbox) {
            lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                aptionDelay: 250,
            });
            } else {
            lightbox.refresh();
                }
            }, 0);

            form.reset();
        })
        .catch(error => {
            iziToast.show({
              message: 'Sorry, something went wrong. Please try again!',
              position: 'topRight',
              messageColor: '#fff',
              titleColor: '#fff',
              color: '#ef4040',
              iconUrl: './img/bi_x-octagon-2.svg',
              maxWidth: 432
            })
        })
        .finally(() => {
            loader.classList.add("hidden");
        })
    
    
}
