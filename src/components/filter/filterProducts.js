import getProducts from "../../services/productServices";
import renderProducts from "../products/renderProducts";

const selectElement = document.querySelector(".productSelect");
const loadingIndicator = document.querySelector(".loadingIndicator");

selectElement.addEventListener("change", async (e) => {
  const selectedCategory = e.target.value;
  const res = await getProducts();
  const filteredProducts =
    selectedCategory === "全部"
      ? res
      : res.filter((product) => product.category === selectedCategory);
  renderProducts(filteredProducts);
});
