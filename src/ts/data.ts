export async function loadProducts() {
    const response = await fetch("./dist/assets/data.json");
    const json = await response.json();
    return json.data; //an array of products
}
