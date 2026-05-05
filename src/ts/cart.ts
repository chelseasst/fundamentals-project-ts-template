import type { Product } from "./product.js";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function initCartPage() {
  renderCart();
  setupCartActions();
  setupCheckout();
}

export function getCart(): CartItem[] {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product: Product) {
  const cart = getCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartCounter();
}

export function addToCartWithQuantity(product: Product, quantity: number) {
  const cart = getCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }

  saveCart(cart);
  updateCartCounter();
}


export function updateCartCounter() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const counterEl = document.getElementById("cart-counter");
  if (!counterEl) return;

  if (count > 0) {
    counterEl.textContent = String(count);
    counterEl.classList.remove("hidden");
  } else {
    counterEl.textContent = "";
    counterEl.classList.add("hidden");
  }
}

export function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="empty-cart">Your cart is empty. Use the catalog to add new items.</p>
    `;
    updateTotals();
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.imageUrl}" class="cart-img" alt="${item.name}">
        <div class="cart-name">${item.name}</div>
        <div class="cart-price">$${item.price}</div>

        <div class="cart-qty">
          <button class="qty-decrease">-</button>
          <div class="number">${item.quantity}</div>
          <button class="qty-increase">+</button>
        </div>

        <div class="cart-total">$${item.price * item.quantity}</div>

        <button class="cart-delete">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `
    )
    .join("");

  attachCartEvents();
  updateTotals();
}

function attachCartEvents() {
  const cart = getCart();

  document.querySelectorAll(".qty-increase").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".cart-item")?.getAttribute("data-id");
      const item = cart.find((i) => i.id === id);
      if (!item) return;

      item.quantity++;
      saveCart(cart);
      updateCartCounter();
      renderCart();
    });
  });
  document.querySelectorAll(".qty-decrease").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".cart-item")?.getAttribute("data-id");
      const cart = getCart();
      const item = cart.find((i) => i.id === id);
      if (!item) return;

      item.quantity--;

      if (item.quantity <= 0) {
        const newCart = cart.filter((i) => i.id !== id);
        saveCart(newCart);
      } else {
        saveCart(cart);
      }

      updateCartCounter();
      renderCart();
    });
  });

  document.querySelectorAll(".cart-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".cart-item")?.getAttribute("data-id");
      const newCart = cart.filter((i) => i.id !== id);

      saveCart(newCart);
      updateCartCounter();
      renderCart();
    });
  });
}

function setupCartActions() {
  const clearBtn = document.getElementById("clear-cart");
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {
    saveCart([]);
    updateCartCounter();
    renderCart();
  });
}

function setupCheckout() {
  const btn = document.getElementById("checkout");
  if (!btn) return;

  btn.addEventListener("click", () => {
    saveCart([]);

    updateCartCounter();

    const container = document.getElementById("cart-items");
    if (container) {
      container.innerHTML = `
        <p class="success-message">Thank you for your purchase.</p>
      `;
    }
    updateTotals();
  });
}


function updateTotals() {
  const cart = getCart();
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 30 : 0;
  const discount = subTotal > 3000 ? subTotal * 0.1 : 0;
  const total = subTotal + shipping - discount;

  document.getElementById("sub-total")!.textContent = `$${subTotal}`;
  document.getElementById("shipping")!.textContent = `$${shipping}`;
  document.getElementById("total")!.textContent = `$${total}`;
}

initCartPage();
