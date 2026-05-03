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
import { addToCartWithQuantity } from "./cart.js";
function initProductDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("id");
        if (!productId)
            return;
        const products = yield loadProducts();
        const product = products.find(p => p.id === productId);
        if (!product)
            return;
        renderProductInfo(product);
        renderProductGallery(product);
        renderYouMayLike(products, product);
        setupProductDetailsAddToCart(product);
        setupTabs();
    });
}
function renderProductInfo(product) {
    const titleEl = document.getElementById("product-title");
    const priceEl = document.getElementById("product-price");
    const btn = document.querySelector(".add-to-cart");
    if (btn)
        btn.setAttribute("data-id", product.id);
    if (titleEl)
        titleEl.textContent = product.name;
    if (priceEl)
        priceEl.textContent = `$${product.price}`;
    renderRating(product.rating);
}
function renderProductGallery(product) {
    const mainImage = document.getElementById("product-main-image");
    const firstImage = document.getElementById("first-image");
    const thumbnails = document.getElementById("product-thumbnails");
    if (!mainImage || !thumbnails || !firstImage)
        return;
    // Set main image
    mainImage.src = product.imageUrl;
    mainImage.alt = product.name;
    //Set first image
    firstImage.src = product.imageUrl;
    firstImage.alt = product.name;
    //   // Build thumbnails
    //   const galleryImages = [
    //     product.imageUrl,
    //     product.imageFront,
    //     product.imageOpen,
    //     product.imageInside
    //   ].filter(Boolean);
    //   thumbnails.innerHTML = galleryImages
    //     .map(img => `<img src="${img}" alt="${product.name}">`)
    //     .join("");
    // Thumbnail click → change main image
    thumbnails.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            mainImage.src = img.src;
        });
    });
}
function renderYouMayLike(products, current) {
    const container = document.getElementById("you-may-like-container");
    if (!container)
        return;
    //randomly chosen
    const suggestions = products
        .filter(p => p.category === current.category && p.id !== current.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
    container.innerHTML = suggestions
        .map(p => `
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
function setupQuantitySelector() {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const valueEl = document.querySelector(".value");
    let quantity = 1;
    increaseBtn.addEventListener("click", () => {
        quantity++;
        valueEl.textContent = String(quantity);
    });
    decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            valueEl.textContent = String(quantity);
        }
    });
    return () => quantity; // return a function that gives the current quantity
}
function setupProductDetailsAddToCart(product) {
    const btn = document.querySelector(".add-to-cart");
    if (!btn)
        return;
    const getQuantity = setupQuantitySelector();
    btn.addEventListener("click", () => {
        const quantity = getQuantity();
        addToCartWithQuantity(product, quantity);
    });
}
function renderRating(rating) {
    const ratingEl = document.getElementById("product-rating");
    if (!ratingEl)
        return;
    const fullStars = Math.floor(rating); // 4.9 → 4
    const emptyStars = 5 - fullStars;
    let html = "";
    // Full yellow stars
    for (let i = 0; i < fullStars; i++) {
        html += `<span><i class="fa-solid fa-star"></i></span>`;
    }
    // Empty grey stars
    for (let i = 0; i < emptyStars; i++) {
        html += `<span><i class="fa-regular fa-star"></i></span>`;
    }
    ratingEl.innerHTML = html;
}
const detailsHTML = `
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
`;
const reviewsHTML = `
  <div class="reviews-section">
    <h3>Add Review</h3>
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
`;
const shippingHTML = `
  <p>Shipping takes 3–5 business days.</p>
  <p>Free returns within 30 days.</p>
  <p>International shipping available.</p>
`;
function setupTabs() {
    const tabs = document.querySelectorAll(".navigator a");
    const content = document.querySelector(".product-desc-section .content");
    if (!content)
        return;
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove("selected"));
            tab.classList.add("selected");
            const tabName = tab.getAttribute("data-tab");
            if (tabName === "details") {
                content.innerHTML = detailsHTML;
            }
            if (tabName === "reviews") {
                content.innerHTML = reviewsHTML;
                setupReviewValidation();
            }
            if (tabName === "shipping") {
                content.innerHTML = shippingHTML;
            }
        });
    });
}
function setupStarRating() {
    const stars = document.querySelectorAll("#review-stars i");
    let rating = 0;
    stars.forEach(star => {
        star.addEventListener("click", () => {
            rating = Number(star.getAttribute("data-value"));
            // Reset all stars
            stars.forEach(s => s.classList.remove("filled"));
            // Fill up to selected star
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("filled");
            }
        });
    });
    return () => rating;
}
function setupReviewValidation() {
    const getRating = setupStarRating();
    const nameInput = document.getElementById("review-name");
    const emailInput = document.getElementById("review-email");
    const messageInput = document.getElementById("review-message");
    const errorEl = document.getElementById("review-error");
    const successEl = document.getElementById("review-success");
    const submitBtn = document.getElementById("submit-review");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        errorEl.classList.add("hidden");
        successEl.classList.add("hidden");
        const rating = getRating();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        if (!rating || !name || !email || !message) {
            errorEl.textContent = "Please fill in all required fields.";
            errorEl.classList.remove("hidden");
            return;
        }
        successEl.classList.remove("hidden");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        document.querySelectorAll("#review-stars i").forEach(s => s.classList.remove("filled"));
    });
}
initProductDetails();
