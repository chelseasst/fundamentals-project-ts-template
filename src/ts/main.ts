import "./modal.js";
import { initLoginForm } from "./login.js";
import { initPasswordToggle } from "./passwordToggle.js";
import { updateCartCounter } from "./cart.js";

initLoginForm();
initPasswordToggle();

document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
});
