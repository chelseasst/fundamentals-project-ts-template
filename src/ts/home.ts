import { loadProducts } from "./data.js";
import type { Product } from "./product.js";
import { setupAddToCartButtons } from "./cart-ui.js";


async function initHomePage() {
    const products = await loadProducts();

    renderSelectedProducts(products);
    renderNewProducts(products);
    setupAddToCartButtons(products);
}

function renderSelectedProducts(products: Product[]) {
    const selected = products.filter(p =>
        p.blocks.includes("Selected Products")
    );

    const container = document.getElementById("selected-products-container");
    if (!container) return;

    container.innerHTML = selected
        .map(
            (p) => `
      <div class="product">
       <a href="product-details.html?id=${p.id}" class="product-link">
                    <div class="image-cont">
                        <img src="${p.imageUrl}" alt="${p.name}">
                        ${p.salesStatus ? `<span class="sale">Sale</span>` : ""}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${p.name}
                        </p>
                        <span class="price">$${p.price}</span>
                    </div>
         </a>
            <button data-id="${p.id}" class="btn add-to-cart">Add To Cart</button>
       </div>`
        )
        .join("");
}

function renderNewProducts(products: Product[]) {
    const selected = products.filter(p =>
        p.blocks.includes("New Products Arrival")
    );

    const container = document.getElementById("new-products-container");
    if (!container) return;

    container.innerHTML = selected
        .map(
            (p) => `
       <div class="product">
       <a href="product-details.html?id=${p.id}" class="product-link">
                    <div class="image-cont">
                        <img src="${p.imageUrl}" alt="${p.name}">
                        ${p.salesStatus ? `<span class="sale">Sale</span>` : ""}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${p.name}
                        </p>
                        <span class="price">$${p.price}</span>
                    </div>
         </a>
             <a href="product-details.html?id=${p.id}"  class="btn view-product">View Product</a>
       </div>
    `
        )
        .join("");
}


initHomePage();