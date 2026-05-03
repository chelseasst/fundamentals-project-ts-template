import { markActiveNav } from "./navigation";
const ITEMS_PER_PAGE = 12;
const DEFAULT_TOTAL_RESULTS = 15;
const setCatalogCategory = () => {
    var _a;
    const params = new URLSearchParams(window.location.search);
    const category = (_a = params.get("category")) !== null && _a !== void 0 ? _a : "all";
    document.body.dataset.category = category;
};
const updateResultsText = (currentPage, totalResults) => {
    const resultsEl = document.querySelector("#catalog-results-text");
    if (!resultsEl)
        return;
    if (totalResults === 0) {
        resultsEl.textContent = "Showing 0-0 Of 0 Results";
        return;
    }
    const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * ITEMS_PER_PAGE, totalResults);
    resultsEl.textContent = `Showing ${start}-${end} Of ${totalResults} Results`;
};
const initSortControl = () => {
    const sortSelect = document.querySelector("#catalog-sort-select");
    if (!sortSelect)
        return;
    sortSelect.addEventListener("change", () => {
        document.body.dataset.sort = sortSelect.value;
    });
};
markActiveNav();
setCatalogCategory();
updateResultsText(1, DEFAULT_TOTAL_RESULTS);
initSortControl();
