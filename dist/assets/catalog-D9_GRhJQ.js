import{a as e,t}from"./main-2gHV1bjf.js";import{i as n,n as r,r as i,t as a}from"./cart-ui-nQ2kuj1f.js";import{n as o,t as s}from"./rating-stars--u2qOnca.js";var c=e((()=>{i(),s(),a();var e=[],t=[],c=1,l=12;function u(){e=n(),t=[...e],d(),f(),m(),p(),h(),r(e)}function d(){let e=document.getElementById(`catalog-products-container`),n=document.getElementById(`catalog-results-text`);if(!e||!n)return;let r=(c-1)*l,i=r+l,a=t.slice(r,i);n.textContent=`Showing ${r+1}-${Math.min(i,t.length)} of ${t.length} Results`,e.innerHTML=a.map(e=>`
   <article class="product">
        <a href="product-details.html?id=${e.id}" class="product-link" aria-label="View details for ${e.name}">
          <div class="image-cont">
            <img src="${e.imageUrl}" alt="${e.name}">
            ${e.salesStatus?`<span class="sale">Sale</span>`:``}
          </div>
          <div class="desc">
            <p class="type">${e.name}</p>
            <span class="price">$${e.price}</span>
          </div>
        </a>
        <button class="btn add-to-cart" data-id="${e.id}" aria-label="Add ${e.name} to cart">Add To Cart</button>
      </article>
        `).join(``)}function f(){let t=document.getElementById(`top-sets-list`);t&&(t.innerHTML=[...e].sort(()=>Math.random()-.5).slice(0,5).map(e=>`
      <div class="top-item" data-id="${e.id}">
        <img src="${e.imageUrl}" alt="" />
        <div class="top-item-details">
          <p class="type">${e.name}</p>
          <div class="stars-review">
            ${o(e.rating)}
          </div>
          <span class="price">$${e.price}</span>
        </div>
      </div>
    `).join(``),t.querySelectorAll(`.top-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);window.location.href=`product-details.html?id=${t}`})}))}function p(){let n=document.getElementById(`catalog-sort-select`);n&&n.addEventListener(`change`,()=>{let r=n.value;switch(t=[...e],r){case`price-asc`:t.sort((e,t)=>e.price-t.price);break;case`price-desc`:t.sort((e,t)=>t.price-e.price);break;case`popularity-desc`:t.sort((e,t)=>t.popularity-e.popularity);break;case`rating-desc`:t.sort((e,t)=>t.rating-e.rating);break;default:t=e}c=1,d(),m()})}function m(){let e=document.getElementById(`catalog-pages`);if(!e)return;let n=Math.ceil(t.length/l);e.innerHTML=``;for(let t=1;t<=n;t++){let n=document.createElement(`span`);n.textContent=t.toString(),n.classList.add(`page-number`),t===c&&n.classList.add(`selected`),n.addEventListener(`click`,()=>{c=t,d(),g(),m()}),e.appendChild(n)}document.getElementById(`next`)?.addEventListener(`click`,()=>{let e=Math.ceil(t.length/l);c<e&&(c++,d(),g(),m())})}function h(){let n=document.querySelector(`.search-models-form`),r=document.getElementById(`catalog-search-input`),i=document.getElementById(`search-popup`),a=document.getElementById(`popup-close`);!n||!r||(a?.addEventListener(`click`,()=>{i.classList.add(`hidden`)}),n.addEventListener(`submit`,n=>{n.preventDefault();let a=r.value.trim().toLowerCase();if(!a){t=[...e],c=1,d(),m();return}let o=e.filter(e=>e.name.toLowerCase().includes(a));if(o.length===0){i.classList.remove(`hidden`);return}t=o,c=1,d(),m()}))}function g(){let e=document.getElementById(`main-catalog`);e&&e.scrollIntoView({behavior:`smooth`})}u()}));t(),c();