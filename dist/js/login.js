import { closeModal } from "./modal.js";
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isRequired = (value) => value.trim().length > 0;
export const initLoginForm = () => {
    const form = document.querySelector("#login-form");
    if (!form)
        return;
    const emailInput = form.querySelector("#email");
    const passwordInput = form.querySelector("#password");
    const errorBox = form.querySelector(".login-error");
    const successBox = form.querySelector(".login-success");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        // Validate email
        if (!isValidEmail(email)) {
            errorBox.textContent = "Please enter a valid email address.";
            errorBox.classList.remove("hidden");
            return;
        }
        if (!isRequired(password)) {
            errorBox.textContent = "Password is required.";
            errorBox.classList.remove("hidden");
            return;
        }
        errorBox.classList.add("hidden");
        successBox.classList.remove("hidden");
        setTimeout(() => {
            form.reset();
            successBox.classList.add("hidden");
            closeModal();
        }, 2000);
    });
};
