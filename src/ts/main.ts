import "./modal.js";
import { initLoginForm } from "./login.js";
import { updateCartCounter } from "./cart.js";

initLoginForm();

document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
});