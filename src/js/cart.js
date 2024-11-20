let cartItems = [];

export function addToCart(image, id, title, price) {
  const item = { image, id, title, price };
  cartItems.push(item);
  console.log(`添加到購物車: ${title}, 價格: NT$${price}`);
}

// 其他與購物車相關的功能，例如刪除商品等
