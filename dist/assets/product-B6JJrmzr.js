import{i as e,r as t,t as n}from"./main-2gHV1bjf.js";import{i as r,n as i,r as a,t as o}from"./cart-ui-nQ2kuj1f.js";import{n as s,t as c}from"./rating-stars--u2qOnca.js";n(),a(),c(),e(),o();async function l(){let e=new URLSearchParams(window.location.search).get(`id`);if(!e)return;let t=await r(),n=t.find(t=>t.id===e);if(!n){E();return}u(n),d(n),m(n),f(t,n),i(t),y(n)}function u(e){let t=document.getElementById(`product-title`),n=document.getElementById(`product-price`),r=document.querySelector(`.add-to-cart`);r&&r.setAttribute(`data-id`,e.id),t&&(t.textContent=e.name),n&&(n.textContent=`$${e.price}`),h(e.rating)}function d(e){let t=document.getElementById(`product-main-image`),n=document.getElementById(`first-image`),r=document.getElementById(`product-thumbnails`);!t||!n||!r||(t.src=e.imageUrl,t.alt=e.name,n.src=e.imageUrl,n.alt=e.name,r.querySelectorAll(`img`).forEach(e=>{e.addEventListener(`click`,()=>{t.src=e.src})}))}function f(e,t){let n=document.getElementById(`you-may-like-container`);n&&(n.innerHTML=e.filter(e=>e.category===t.category&&e.id!==t.id).sort(()=>Math.random()-.5).slice(0,4).map(e=>`
      <article class="product">
        <a href="product-details.html?id=${e.id}" class="product-link">
          <div class="image-cont">
            <img src="${e.imageUrl}" alt="">
            ${e.salesStatus?`<span class="sale">Sale</span>`:``}
          </div>
          <div class="desc">
            <p class="type">${e.name}</p>
            <span class="price">$${e.price}</span>
          </div>
        </a>
        <button class="btn add-to-cart" data-id="${e.id}" aria-label="Add ${e.name} to cart">Add To Cart</button>
      </article>
    `).join(``))}function p(){let e=document.querySelector(`.decrease`),t=document.querySelector(`.increase`),n=document.querySelector(`.value`),r=1;return t.addEventListener(`click`,()=>{r++,n.textContent=String(r)}),e.addEventListener(`click`,()=>{r>1&&(r--,n.textContent=String(r))}),()=>r}function m(e){let n=document.querySelector(`.details-add-to-cart`);if(!n)return;let r=p();n.addEventListener(`click`,()=>{t(e,r())})}function h(e){let t=document.getElementById(`product-rating`);t&&(t.innerHTML=s(e))}var g=`
 <p class="details-p">
          Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
          mollis. Nulla porta risus id neque tempor, in efficitur justo
          imperdiet. Etiam a ex at ante tincidunt imperdiet. Nunc congue ex
          vel nisl viverra, sit amet aliquet lectus ullamcorper. Praesent
          luctus lacus non lorem elementum, eu tristique sapien suscipit. Sed
          bibendum, ipsum nec viverra malesuada, erat nisi sodales purus, eget
          hendrerit dui ligula eu enim. Ut non est nisi. Pellentesque
          tristique pretium dolor eu commodo.
        <p class="details-p">Proin iaculis nibh vitae lectus
          mollis bibendum. Quisque varius eget urna sit amet luctus.
          Suspendisse potenti. Curabitur ac placerat est, sit amet sodales
          risus. Pellentesque viverra dui auctor, ullamcorper turpis pharetra,
          facilisis quam. Proin iaculis nibh vitae lectus mollis bibendum.
          Quisque varius eget urna sit amet luctus. Suspendisse potenti.
          Curabitur ac placerat est, sit amet sodales risus. Pellentesque
          viverra dui auctor, ullamcorper turpis pharetra, facilisis quam.
          Proin iaculis nibh vitae lectus mollis bibendum.
        </p>
        <p class="details-p">Quisque varius eget
          urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat
          est, sit amet sodales risus. Pellentesque viverra dui auctor,
          ullamcorper turpis pharetra, facilisis quam.</p>
        </p>
`,_=`
  <div class="reviews-section" aria-labelledby="title-4">

     <div class="all-reviews">
        <p id="reviews-count"></p>
        <div id="reviews-holder"></div>
     </div>

     <div class="write-review">
        <h4 id="title-4">Add Review</h4>
        <p>Your email address won't be shared with anybody. Required fields have the symbol *</p>
   
  <form id="review-form">
     <div class="row">
      <label id="rate-title">RATE PRODUCT</label>
      <div class="stars" id="review-stars">
        <i class="fa-regular fa-star" data-value="1"></i>
        <i class="fa-regular fa-star" data-value="2"></i>
        <i class="fa-regular fa-star" data-value="3"></i>
        <i class="fa-regular fa-star" data-value="4"></i>
        <i class="fa-regular fa-star" data-value="5"></i>
      </div>
    </div>

      <textarea id="review-message" placeholder="Your Review *"></textarea>

      <div class="row">
        <input type="text" id="review-name" placeholder="Your Name *">
        <input type="text" id="review-email" placeholder="Your Email *">
      </div>

      <div class="row checkbox-row">
        <input type="checkbox" id="save-info">
        <label for="save-info">Save my name, email, and website in this browser for next time.</label>
      </div>

      <p id="review-error" class="error hidden"></p>
      <p id="review-success" class="success hidden">Thank you for your review!</p>

      <button class="btn" id="submit-review">Submit</button>
    </form>
    </div>
  </div>
`,v=`
  <p>Shipping takes 3–5 business days.</p>
  <p>Free returns within 30 days.</p>
  <p>International shipping available.</p>
`;function y(e){let t=document.querySelectorAll(`.navigator a`),n=document.querySelector(`.product-details-section .content`);n&&t.forEach(r=>{r.addEventListener(`click`,i=>{i.preventDefault(),t.forEach(e=>e.classList.remove(`selected`)),r.classList.add(`selected`);let a=r.getAttribute(`data-tab`);a===`details`&&(n.innerHTML=g),a===`reviews`&&(n.innerHTML=_,w(e.id),T(e.id,e.name),x(e)),a===`shipping`&&(n.innerHTML=v)})})}function b(){let e=document.querySelectorAll(`#review-stars i`),t=0;return e.forEach(n=>{n.addEventListener(`click`,()=>{t=Number(n.getAttribute(`data-value`)),e.forEach(e=>e.classList.remove(`filled`));for(let n=0;n<t;n++)e[n].classList.add(`filled`)})}),()=>t}function x(e){let t=b(),n=document.getElementById(`review-name`),r=document.getElementById(`review-email`),i=document.getElementById(`review-message`),a=document.getElementById(`review-error`),o=document.getElementById(`review-success`);document.getElementById(`submit-review`).addEventListener(`click`,s=>{s.preventDefault(),a.classList.add(`hidden`),o.classList.add(`hidden`);let c=t(),l=n.value.trim(),u=r.value.trim(),d=i.value.trim();if(!c||!l||!u||!d){a.textContent=`Please fill in all required fields.`,a.classList.remove(`hidden`);return}let f={name:l,email:u,message:d,rating:c,date:new Date().toLocaleDateString()};C(e.id,f),w(e.id),T(e.id,e.name),o.classList.remove(`hidden`),n.value=``,r.value=``,i.value=``,document.querySelectorAll(`#review-stars i`).forEach(e=>e.classList.remove(`filled`))})}function S(e){let t=`reviews_${e}`;return JSON.parse(localStorage.getItem(t)||`[]`)}function C(e,t){let n=`reviews_${e}`,r=S(e);r.push(t),localStorage.setItem(n,JSON.stringify(r))}function w(e){let t=document.getElementById(`reviews-holder`);if(!t)return;let n=S(e);if(n.length===0){t.innerHTML=`<p>No reviews yet. Be the first!</p>`;return}t.innerHTML=n.map(e=>`
      <div class="review">
        <div class="image">
          <img src="./dist/assets/team-person-1.png" alt=""/>
        </div>
        <div class="content">
          <div class="nameReview">
            <p class="name">${e.name} <span>- ${e.date}</span></p>
            <div class="stars-review">
              ${s(e.rating)}
            </div>
          </div>
          <p>${e.message}</p>
        </div>
      </div>
    `).join(``)}function T(e,t){let n=document.getElementById(`reviews-count`);if(!n)return;let r=S(e).length;n.textContent=`${r} ${r===1?`review`:`reviews`} for ${t}`}function E(){let e=document.getElementById(`main-product-details`);e&&(e.innerHTML=`
    <div class="not-found">
      <h2>Product Not Found</h2>
      <p>The product you are looking for does not exist or is no longer available.</p>
      <a href="./catalog.html" class="btn">Back to Catalog</a>
    </div>
  `)}l();