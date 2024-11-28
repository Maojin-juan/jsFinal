import { deleteCartItem } from "../../services/cartServices";
import renderCart from "./renderCart";

export function attachDeleteBtn() {
  const deleteCartBtn = document.querySelectorAll(".deleteCart");

  deleteCartBtn.forEach((item) => {
    item.addEventListener("click", async (event) => {
      const cartId = event.target.getAttribute("data-id");

      await deleteCartItem(cartId);
      await renderCart();
    });
  });
}
