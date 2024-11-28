import { getCarts } from "../../services/cartServices";
import { attachDeleteBtn } from "./handleDeleteCart";

export default async function renderCart() {
  const cartList = document.querySelector(".shoppingCart-table");
  cartList.innerHTML = "";
  const cartData = await getCarts();

  const cartItems = cartData.carts
    .map(
      (item) => `
      <tr>
        <td>
          <div class="cardItem-title">
            <img src="${item.product.images}" alt="" />
            <p>${item.product.title}</p>
          </div>
        </td>
        <td>${item.product.price}</td>
        <td>${item.quantity}</td>
        <td>${item.product.price * item.quantity}</td>
        <td class="discardBtn">
          <button type="button" class="deleteCart material-icons" data-id="${item.id}">clear</button>
        </td>
      </tr>
  `,
    )
    .join("");

  cartList.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
      <th width="40%">品項</th>
      <th width="15%">單價</th>
      <th width="15%">數量</th>
      <th width="15%">金額</th>
      <th width="15%"></th>
    </tr>
    ${cartItems}
    <tr>
      <td>
        <a href="#" class="discardAllBtn">刪除所有品項</a>
      </td>
      <td></td>
      <td></td>
      <td>
        <p>總金額</p>
      </td>
      <td>${cartData.finalTotal}</td>
    </tr>`,
  );

  attachDeleteBtn();
}

renderCart();
