export const renderFilter = async (products) => {
  const categories = [...new Set(products.map((item) => item.category))];
  const selectElement = document.querySelector(".productSelect");

  const options = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  selectElement.insertAdjacentHTML(
    "beforeend",
    `<option value="全部" selected>全部</option>${options}`,
  );
};
