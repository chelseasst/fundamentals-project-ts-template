import { closeModal } from "./modal.js";

export const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isRequired = (value: string): boolean =>
    value.trim().length > 0;


export const initLoginForm = () => {
    const form = document.querySelector("#login-form") as HTMLFormElement;
    if (!form) return;

    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const passwordInput = form.querySelector("#password") as HTMLInputElement;
    const errorBox = form.querySelector(".login-error") as HTMLElement;
    const successBox = form.querySelector(".login-success") as HTMLElement;

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