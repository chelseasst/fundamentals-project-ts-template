document.addEventListener("DOMContentLoaded", () => {
    setupContactForm();
});

function setupContactForm() {
    const form = document.getElementById("feedback-form") as HTMLFormElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;

    const errorEl = document.getElementById("feedback-error")!;
    const successEl = document.getElementById("feedback-success")!;

    emailInput.addEventListener("input", () => {
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("invalid");
        } else {
            emailInput.classList.remove("invalid");
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        errorEl.classList.add("hidden");
        successEl.classList.add("hidden");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showError("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            showError("Please enter a valid email address.");
            return;
        }

        successEl.classList.remove("hidden");
        form.reset();
    });

    function showError(msg: string) {
        errorEl.textContent = msg;
        errorEl.classList.remove("hidden");
    }
}

function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
