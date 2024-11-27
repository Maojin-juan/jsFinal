import getProducts from "../../services/productServices";
import productsCard from "./productsCard";

const initialRender = async () => {
  const products = await getProducts();
  renderProducts(products);
};

export const renderProducts = (products) => {
  document.querySelector(".productWrap").innerHTML = "";
  products.forEach((item) => {
    const card = productsCard(item);
    document
      .querySelector(".productWrap")
      .insertAdjacentHTML("beforeend", card);
  });
};

initialRender();

export default renderProducts;
