export const initPasswordToggle = () => {
    const passwordInput = document.querySelector("#password") as HTMLInputElement;
    const toggleIcon = document.querySelector(".toggle-password") as HTMLElement;

    if (!passwordInput || !toggleIcon) return;

    toggleIcon.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";

        passwordInput.type = isPassword ? "text" : "password";
    });
};
