export function updateCartDisplay(item) {
  const cartTable = document.querySelector(".shoppingCart-table");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <div class="cardItem-title">
        <img src="${item.image}" alt="" />
        <p>${item.title}</p>
      </div>
    </td>
    <td>NT$${item.price}</td>
    <td>1</td>
    <td>NT$${item.price}</td>
    <td class="discardBtn">
      <a href="#" class="material-icons">clear</a>
    </td>
  `;
  cartTable.appendChild(newRow);
}
