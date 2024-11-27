import { getCarts, addToCart } from "../../services/cartServices";
import renderCart from "./renderCart";

document.addEventListener("DOMContentLoaded", () => {
  const productWrap = document.querySelector(".productWrap");

  productWrap.addEventListener("click", async (event) => {
    const productId = event.target.getAttribute("data-id");
    if (event.target.classList.contains("addToCart")) {
      await handleAddToCart(productId);
      await renderCart();
    }
  });
});

async function handleAddToCart(productId) {
  const quantity = 1;

  const cartData = await getCarts();
  const existingItem = cartData.carts.find(
    (item) => item.product.id === productId,
  );

  if (existingItem) {
    const updatedQuantity = existingItem.quantity + 1;
    return await addToCart(productId, updatedQuantity, existingItem.id);
  } else {
    const cartId = cartData.id;
    return await addToCart(productId, quantity, cartId);
  }
}
