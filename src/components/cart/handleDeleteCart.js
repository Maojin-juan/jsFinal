import {
  getCarts,
  deleteCartItem,
  deleteAllCartItem,
} from "../../services/cartServices";
import renderCarts from "./renderCarts";

export function attachDeleteBtn() {
  const deleteCartItemBtn = document.querySelectorAll(".deleteCart");
  const deleteAllCartItemBtn = document.querySelector(".discardAllBtn");

  deleteCartItemBtn.forEach((item) => {
    item.addEventListener("click", async (event) => {
      const cartId = event.target.getAttribute("data-id");

      await deleteCartItem(cartId);
      await renderCarts(await getCarts());
    });
  });

  deleteAllCartItemBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    await deleteAllCartItem();
    await renderCarts(await getCarts());
  });
}
