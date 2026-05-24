import products from "../data/data.json";
import { Product } from "./product";

export function loadProducts() {
    return products.data as Product[];
}