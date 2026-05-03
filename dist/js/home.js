var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadProducts } from "./data.js";
import { setupAddToCartButtons } from "./cart-ui.js";
function initHomePage() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield loadProducts();
        renderSelectedProducts(products);
        renderNewProducts(products);
        setupAddToCartButtons(products);
    });
}
function renderSelectedProducts(products) {
    const selected = products.filter(p => p.blocks.includes("Selected Products"));
    const container = document.getElementById("selected-products-container");
    if (!container)
        return;
    container.innerHTML = selected
        .map((p) => `
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
       </div>`)
        .join("");
}
function renderNewProducts(products) {
    const selected = products.filter(p => p.blocks.includes("New Products Arrival"));
    const container = document.getElementById("new-products-container");
    if (!container)
        return;
    container.innerHTML = selected
        .map((p) => `
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
    `)
        .join("");
}
initHomePage();
