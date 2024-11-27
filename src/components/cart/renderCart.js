import getCarts from "../../services/cartServices";

const renderCart = async (cartData) => {
  const carts = await getCarts();
  cartList.innerHTML = cartData
    .map(
      (item) => `
    <li>
      <p>名稱: <span>${item.product.title}</span></p>
      <p>數量: <span>${item.quantity}</span></p>
      <button class="btn btn-danger deleteCart" data-id="${item.id}">刪除</button>
    </li>
  `,
    )
    .join("");
  attachDeleteCartEvent();
};

renderCart();
