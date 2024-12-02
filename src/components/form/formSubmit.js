import {
  displayValidationErrors,
  form,
  constraints,
} from "../validate/formValidation";
import { getCarts } from "../../services/cartServices";
import { postOrder } from "../../services/orderServices";
import renderCarts from "../cart/renderCarts";

/* 綁定表單提交事件 */
document.addEventListener("DOMContentLoaded", () => {
  if (!form) return;
  form.addEventListener("submit", handleFormSubmission, false);
});

/* 表單送出處理 */
function handleFormSubmission(event) {
  event.preventDefault();
  let errors = validate(form, constraints);
  if (errors) {
    displayValidationErrors(errors);
  } else {
    submitOrder();
  }
}

/* 送出訂單 */
async function submitOrder() {
  const orderData = {
    data: {
      user: {
        name: document.querySelector("#customerName").value.trim(),
        tel: document.querySelector("#customerPhone").value.trim(),
        email: document.querySelector("#customerEmail").value.trim(),
        address: document.querySelector("#customerAddress").value.trim(),
        payment: document.querySelector("#tradeWay").value.trim(),
      },
      carts: await getCartsData(),
    },
  };

  await postOrder(orderData);
  await renderCarts(await getCarts());
}

// 獲取購物車數據的函數
async function getCartsData() {
  const cart = await getCarts();
  return cart.carts;
}
