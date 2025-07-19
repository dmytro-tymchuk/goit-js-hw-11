import{a as f,i as l}from"./assets/vendor-B25bM7TJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="51385266-59a206174458b904205f7b7fa";function m(r){return f("https://pixabay.com/api/",{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits).catch(o=>{console.log(o.message)})}function p(r){return r.map(({webformatURL:o,tags:s,likes:a,views:e,comments:t,downloads:i})=>`
      <div class="wrap">
        <img class="img" src="${o}" alt="${s}" width="360px">
        <ul class="list">
            <li class="list-item">
              <p class="label">Likes</p>
              <p class="value">${a}</p>
            </li>
            <li class="list-item">
              <p class="label">Views</p>
              <p class="value">${e}</p>
            </li>
            <li class="list-item">
              <p class="label">Comments</p>
              <p class="value">${t}</p>
            </li>
            <li class="list-item">
              <p class="label">Downloads</p>
              <p class="value">${i}</p>
            </li>
          </ul>
      </div>
      `).join("")}const c=document.querySelector(".form"),n=document.querySelector(".gallery");c.addEventListener("submit",g);function g(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(o===""){l.warning({message:"Unfortunately you cannot leave the input blank",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432});return}n.innerHTML="",m(o).then(s=>{if(s.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432});return}n.innerHTML=p(s),c.reset()}).catch(s=>{l.show({message:"Sorry, something went wrong. Please try again!",position:"topRight",messageColor:"#fff",titleColor:"#fff",color:"#ef4040",iconUrl:"./img/bi_x-octagon-2.svg",maxWidth:432})})}
//# sourceMappingURL=index.js.map
