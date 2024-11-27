import renderProducts from "../products/renderProducts";

const selectElement = document.querySelector(".productSelect");

export const filterProducts = async (products) => {
  selectElement.addEventListener("change", async (e) => {
    const selectedCategory = e.target.value;
    const filteredProducts =
      selectedCategory === "全部"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    renderProducts(filteredProducts);
  });
};
