import { loadProducts } from "./data.js";
import type { Product } from "./product.js";
import { setupAddToCartButtons } from "./cart-ui.js";

function initHomePage() {
    const products = loadProducts();

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
      <article class="product">
       <a href="product-details.html?id=${p.id}" class="product-link">
                    <div class="image-cont">
                        <img src="${p.imageUrl}" alt="">
                        ${p.salesStatus ? `<span class="sale">Sale</span>` : ""}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${p.name}
                        </p>
                        <span class="price">$${p.price}</span>
                    </div>
         </a>
            <button data-id="${p.id}" class="btn add-to-cart" aria-label="Add ${p.name} to cart">Add To Cart</button>
       </article>`
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
       <article class="product">
       <a href="product-details.html?id=${p.id}" class="product-link" aria-label="View details for ${p.name}">
                    <div class="image-cont">
                        <img src="${p.imageUrl}" alt="">
                        ${p.salesStatus ? `<span class="sale">Sale</span>` : ""}
                    </div>
                    <div class="desc">
                        <p class="type">
                            ${p.name}
                        </p>
                        <span class="price">$${p.price}</span>
                    </div>
         </a>
             <a href="product-details.html?id=${p.id}" class="btn view-product" aria-label="View ${p.name} product">View Product</a>
       </article>
    `
        )
        .join("");
}


initHomePage();