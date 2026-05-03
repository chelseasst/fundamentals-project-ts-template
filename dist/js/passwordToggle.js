export const initPasswordToggle = () => {
    const passwordInput = document.querySelector("#password");
    const toggleIcon = document.querySelector(".toggle-password");
    if (!passwordInput || !toggleIcon)
        return;
    toggleIcon.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
    });
};
