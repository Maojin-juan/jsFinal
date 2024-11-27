import getProducts from "../../services/productServices";

const selectElement = document.querySelector(".productSelect");

async function renderFilter() {
  const products = await getProducts();

  const categories = [...new Set(products.map((item) => item.category))];

  const options = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  selectElement.insertAdjacentHTML(
    "beforeend",
    `<option value="全部" selected>全部</option>${options}`,
  );
}

renderFilter();
