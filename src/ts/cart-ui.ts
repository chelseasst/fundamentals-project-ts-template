import type { Product } from "./product";
import { addToCart } from "./cart.js";


export async function setupAddToCartButtons(products: Product[]) {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const product = products.find((p) => p.id === id);

            if (product) {
                addToCart(product);
            }
        });
    });
}

