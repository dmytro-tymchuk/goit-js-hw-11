import{a as p,i as a,S as g}from"./assets/vendor-C5BuWtzx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="51385266-59a206174458b904205f7b7fa";function h(o){return p("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>{console.log(s.message)})}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:i,downloads:m})=>`
      <div class="wrap">
       <a class="gallery-item" href="${r}"><img class="img" src="${s}" alt="${l}" width="360px"></a
           >
            <ul class="list">
                <li class="list-item">
                  <p class="label">Likes</p>
                  <p class="value">${e}</p>
                </li>
                <li class="list-item">
                  <p class="label">Views</p>
                  <p class="value">${t}</p>
                </li>
                <li class="list-item">
                  <p class="label">Comments</p>
                  <p class="value">${i}</p>
                </li>
                <li class="list-item">
                  <p class="label">Downloads</p>
                  <p class="value">${m}</p>
                </li>
              </ul>
        
      </div>
      `).join("")}let n=null;const u=document.querySelector(".form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader");u.addEventListener("submit",b);function b(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(s===""){a.warning({message:"Unfortunately you cannot leave the input blank",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432});return}c.innerHTML="",f.classList.remove("hidden"),h(s).then(r=>{if(r.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432});return}c.innerHTML=y(r),setTimeout(()=>{n?n.refresh():n=new g(".gallery a",{captionsData:"alt",aptionDelay:250})},0),u.reset()}).catch(r=>{a.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432})}).finally(()=>{f.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
