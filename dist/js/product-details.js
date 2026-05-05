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
import { addToCartWithQuantity } from "./cart.js";
import { setupAddToCartButtons } from "./cart-ui.js";
function initProductDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("id");
        if (!productId)
            return;
        const products = yield loadProducts();
        const product = products.find(p => p.id === productId);
        if (!product) {
            renderNotFoundPage();
            return;
        }
        renderProductInfo(product);
        renderProductGallery(product);
        setupProductDetailsAddToCart(product);
        renderYouMayLike(products, product);
        setupAddToCartButtons(products);
        setupTabs(product);
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
    if (!mainImage || !firstImage || !thumbnails)
        return;
    mainImage.src = product.imageUrl;
    mainImage.alt = product.name;
    firstImage.src = product.imageUrl;
    firstImage.alt = product.name;
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
    return () => quantity;
}
function setupProductDetailsAddToCart(product) {
    const btn = document.querySelector(".details-add-to-cart");
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
    ratingEl.innerHTML = renderStars(rating);
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

     <div class="all-reviews">
        <p id="reviews-count"></p>
        <div id="reviews-holder"></div>
     </div>

     <div class="write-review">
        <h4>Add Review</h4>
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
`;
const shippingHTML = `
  <p>Shipping takes 3–5 business days.</p>
  <p>Free returns within 30 days.</p>
  <p>International shipping available.</p>
`;
function setupTabs(product) {
    const tabs = document.querySelectorAll(".navigator a");
    const content = document.querySelector(".product-details-section .content");
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
                renderReviews(product.id);
                updateReviewsCount(product.id, product.name);
                setupReviewValidation(product);
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
            stars.forEach(s => s.classList.remove("filled"));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("filled");
            }
        });
    });
    return () => rating;
}
function setupReviewValidation(product) {
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
        const review = {
            name,
            email,
            message,
            rating,
            date: new Date().toLocaleDateString()
        };
        saveReview(product.id, review);
        renderReviews(product.id);
        updateReviewsCount(product.id, product.name);
        successEl.classList.remove("hidden");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        document.querySelectorAll("#review-stars i").forEach(s => s.classList.remove("filled"));
    });
}
// REVIEWS
export function loadReviews(productId) {
    const key = `reviews_${productId}`;
    return JSON.parse(localStorage.getItem(key) || "[]");
}
export function saveReview(productId, review) {
    const key = `reviews_${productId}`;
    const existing = loadReviews(productId);
    existing.push(review);
    localStorage.setItem(key, JSON.stringify(existing));
}
export function renderReviews(productId) {
    const container = document.getElementById("reviews-holder");
    if (!container)
        return;
    const reviews = loadReviews(productId);
    if (reviews.length === 0) {
        container.innerHTML = `<p>No reviews yet. Be the first!</p>`;
        return;
    }
    container.innerHTML = reviews
        .map(r => `
      <div class="review">
        <div class="image">
          <img src="./dist/assets/team-person-1.png" />
        </div>
        <div class="content">
          <div class="nameReview">
            <p class="name">${r.name} <span>- ${r.date}</span></p>
            <div class="stars-review">
              ${renderStars(r.rating)}
            </div>
          </div>
          <p>${r.message}</p>
        </div>
      </div>
    `)
        .join("");
}
function updateReviewsCount(productId, productName) {
    const countEl = document.getElementById("reviews-count");
    if (!countEl)
        return;
    const reviews = loadReviews(productId);
    const count = reviews.length;
    const plural = count === 1 ? "review" : "reviews";
    countEl.textContent = `${count} ${plural} for ${productName}`;
}
function renderNotFoundPage() {
    const main = document.getElementById("main-product-details");
    if (!main)
        return;
    main.innerHTML = `
    <div class="not-found">
      <h2>Product Not Found</h2>
      <p>The product you are looking for does not exist or is no longer available.</p>
      <a href="./catalog.html" class="btn">Back to Catalog</a>
    </div>
  `;
}
initProductDetails();
