import{a as e,t}from"./main-2gHV1bjf.js";import{i as n,n as r,r as i,t as a}from"./cart-ui-nQ2kuj1f.js";var o=e((()=>{i(),a();function e(){let e=n();t(e),o(e),r(e)}function t(e){let t=e.filter(e=>e.blocks.includes(`Selected Products`)),n=document.getElementById(`selected-products-container`);n&&(n.innerHTML=t.map(e=>`
      <article class="product">
       <a href="product-details.html?id=${e.id}" class="product-link">
                    <div class="image-cont">
                        <img src="${e.imageUrl}" alt="">
                        ${e.salesStatus?`<span class="sale">Sale</span>`:``}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${e.name}
                        </p>
                        <span class="price">$${e.price}</span>
                    </div>
         </a>
            <button data-id="${e.id}" class="btn add-to-cart" aria-label="Add ${e.name} to cart">Add To Cart</button>
       </article>`).join(``))}function o(e){let t=e.filter(e=>e.blocks.includes(`New Products Arrival`)),n=document.getElementById(`new-products-container`);n&&(n.innerHTML=t.map(e=>`
       <article class="product">
       <a href="product-details.html?id=${e.id}" class="product-link" aria-label="View details for ${e.name}">
                    <div class="image-cont">
                        <img src="${e.imageUrl}" alt="">
                        ${e.salesStatus?`<span class="sale">Sale</span>`:``}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${e.name}
                        </p>
                        <span class="price">$${e.price}</span>
                    </div>
         </a>
             <a href="product-details.html?id=${e.id}" class="btn view-product" aria-label="View ${e.name} product">View Product</a>
       </article>
    `).join(``))}e()}));t(),o();