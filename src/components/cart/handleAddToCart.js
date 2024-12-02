import { getCarts, addToCart } from "../../services/cartServices";
import renderCarts from "./renderCarts";

document.addEventListener("DOMContentLoaded", () => {
  const productWrap = document.querySelector(".productWrap");
  if (!productWrap) return;

  productWrap.addEventListener("click", async (event) => {
    const productId = event.target.getAttribute("data-id");
    if (event.target.classList.contains("addToCart")) {
      await handleAddToCart(productId);
      await renderCarts(await getCarts());
    }
  });
});

async function handleAddToCart(productId) {
  const cartData = await getCarts();
  const existingItem = cartData.carts.find(
    (item) => item.product.id === productId,
  );

  if (existingItem) {
    const updatedQuantity = existingItem.quantity + 1;
    return await addToCart(existingItem.id, updatedQuantity, existingItem);
  } else {
    return await addToCart(productId, 1, existingItem);
  }
}
