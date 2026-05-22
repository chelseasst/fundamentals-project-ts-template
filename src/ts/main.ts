import "../scss/main.scss";
import "./modal";
import { initLoginForm } from "./login";
import { updateCartCounter } from "./cart";


initLoginForm();

document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
});