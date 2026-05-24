import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "dist",

        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                catalog: resolve(__dirname, "catalog.html"),
                contact: resolve(__dirname, "contact.html"),
                cart: resolve(__dirname, "cart.html"),
                product: resolve(__dirname, "product-details.html")
            }
        }
    }
});