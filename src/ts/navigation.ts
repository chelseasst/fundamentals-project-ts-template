const getFileNameFromPath = (path: string): string => {
  const trimmedPath = path.split("?")[0];
  const fileName = trimmedPath.split("/").pop();
  return fileName && fileName.length > 0 ? fileName : "index.html";
};

export const markActiveNav = (): void => {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".header-nav a");
  const currentPage = getFileNameFromPath(window.location.pathname);

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") ?? "";
    const targetPage = getFileNameFromPath(href);
    link.classList.toggle("is-active", targetPage === currentPage);
  });
};
