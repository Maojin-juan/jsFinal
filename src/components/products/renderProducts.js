import productsCard from "./productsCard";

export const renderProducts = async (products) => {
  document.querySelector(".productWrap").innerHTML = "";
  products.forEach((item) => {
    const card = productsCard(item);
    document
      .querySelector(".productWrap")
      .insertAdjacentHTML("beforeend", card);
  });
};

export default renderProducts;
