const getFileNameFromPath = (path) => {
    const trimmedPath = path.split("?")[0];
    const fileName = trimmedPath.split("/").pop();
    return fileName && fileName.length > 0 ? fileName : "index.html";
};
export const markActiveNav = () => {
    const navLinks = document.querySelectorAll(".header-nav a");
    const currentPage = getFileNameFromPath(window.location.pathname);
    navLinks.forEach((link) => {
        var _a;
        const href = (_a = link.getAttribute("href")) !== null && _a !== void 0 ? _a : "";
        const targetPage = getFileNameFromPath(href);
        link.classList.toggle("is-active", targetPage === currentPage);
    });
};
