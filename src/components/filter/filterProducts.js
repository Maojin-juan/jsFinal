import renderProducts from "../products/renderProducts";

export const filterProducts = async (products) => {
  const selectElement = document.querySelector(".productSelect");
  if (!selectElement) return null;

  selectElement.addEventListener("change", async (e) => {
    const selectedCategory = e.target.value;
    const filteredProducts =
      selectedCategory === "全部"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    renderProducts(filteredProducts);
  });
};
