import productsCard from "./productsCard";

export const renderProducts = async (products) => {
  const productWrap = document.querySelector(".productWrap");
  if (!productWrap) return null;

  productWrap.innerHTML = "";

  products.forEach((item) => {
    const card = productsCard(item);
    productWrap.insertAdjacentHTML("beforeend", card);
  });
};

export default renderProducts;
