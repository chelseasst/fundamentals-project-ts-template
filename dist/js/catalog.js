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
import { renderStars } from "./rating-stars.js";
import { setupAddToCartButtons } from "./cart-ui.js";
let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 12;
function initCatalog() {
    return __awaiter(this, void 0, void 0, function* () {
        allProducts = yield loadProducts();
        filteredProducts = [...allProducts];
        renderCatalog();
        renderTopRandomSets();
        renderPagination();
        setupSorting();
        setupCatalogSearch();
        setupAddToCartButtons(allProducts);
    });
}
function renderCatalog() {
    const container = document.getElementById("catalog-products-container");
    const resultsText = document.getElementById("catalog-results-text");
    if (!container || !resultsText)
        return;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);
    resultsText.textContent = `Showing ${start + 1}-${Math.min(end, filteredProducts.length)} of ${filteredProducts.length} Results`;
    container.innerHTML = productsToShow
        .map((p) => `
   <div class="product">
        <a href="product-details.html?id=${p.id}" class="product-link">
          <div class="image-cont">
            <img src="${p.imageUrl}" alt="${p.name}">
            ${p.salesStatus ? `<span class="sale">Sale</span>` : ""}
          </div>
          <div class="desc">
            <p class="type">${p.name}</p>
            <span class="price">$${p.price}</span>
          </div>
        </a>
        <button class="btn add-to-cart" data-id="${p.id}">Add To Cart</button>
      </div>
        `)
        .join("");
}
function renderTopRandomSets() {
    const container = document.getElementById("top-sets-list");
    if (!container)
        return;
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    const picks = shuffled.slice(0, 5);
    container.innerHTML = picks
        .map(p => `
      <div class="top-item" data-id="${p.id}">
        <img src="${p.imageUrl}" alt="${p.name}" />
        <div class="top-item-details">
          <p class="type">${p.name}</p>
          <div class="stars-review">
            ${renderStars(p.rating)}
          </div>
          <span class="price">$${p.price}</span>
        </div>
      </div>
    `)
        .join("");
    // Make items clickable → open product details
    container.querySelectorAll(".top-item").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.getAttribute("data-id");
            window.location.href = `product-details.html?id=${id}`;
        });
    });
}
function setupSorting() {
    const sortSelect = document.getElementById("catalog-sort-select");
    if (!sortSelect)
        return;
    sortSelect.addEventListener("change", () => {
        const value = sortSelect.value;
        //so that default sorting is always the same
        filteredProducts = [...allProducts];
        switch (value) {
            case "price-asc":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case "popularity-desc":
                filteredProducts.sort((a, b) => b.popularity - a.popularity);
                break;
            case "rating-desc":
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                filteredProducts = allProducts;
        }
        currentPage = 1;
        renderCatalog();
        renderPagination();
    });
}
;
function renderPagination() {
    var _a;
    const pagesContainer = document.getElementById("catalog-pages");
    if (!pagesContainer)
        return;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    pagesContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const pageEl = document.createElement("span");
        pageEl.textContent = i.toString();
        pageEl.classList.add("page-number");
        if (i === currentPage) {
            pageEl.classList.add("selected");
        }
        pageEl.addEventListener("click", () => {
            currentPage = i;
            renderCatalog();
            scrollToCatalogTop();
            renderPagination();
        });
        pagesContainer.appendChild(pageEl);
    }
    (_a = document.getElementById("next")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCatalog();
            scrollToCatalogTop();
            renderPagination();
        }
    });
}
;
function setupCatalogSearch() {
    const form = document.querySelector(".search-models-form");
    const input = document.getElementById("catalog-search-input");
    const popup = document.getElementById("search-popup");
    const popupClose = document.getElementById("popup-close");
    if (!form || !input)
        return;
    popupClose === null || popupClose === void 0 ? void 0 : popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        if (!query) {
            // Reset to full catalog
            filteredProducts = [...allProducts];
            currentPage = 1;
            renderCatalog();
            renderPagination();
            return;
        }
        // Filter catalog products
        const results = allProducts.filter(p => p.name.toLowerCase().includes(query));
        if (results.length === 0) {
            popup.classList.remove("hidden");
            return;
        }
        filteredProducts = results;
        currentPage = 1;
        renderCatalog();
        renderPagination();
    });
}
function scrollToCatalogTop() {
    const catalog = document.getElementById("main-catalog");
    if (catalog) {
        catalog.scrollIntoView({ behavior: "smooth" });
    }
}
initCatalog();
