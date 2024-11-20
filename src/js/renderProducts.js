import { fetchProducts } from "./fetchProducts.js";
import { addToCart } from "./cart.js";
import { updateCartDisplay } from "./cartDisplay.js";

/**
 * 渲染產品的函數
 * @param {Array} products - 產品數據的數組
 */
export function renderProducts(products) {
  const productWrap = document.querySelector(".productWrap");
  productWrap.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("li");
    productCard.className = "productCard";
    productCard.innerHTML = `
      <h4 class="productType">新品</h4>
      <img src="${product.image}" alt="${product.title}" />
      <a href="#" class="addCardBtn" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">加入購物車</a>
      <h3>${product.title}</h3>
      <del class="originPrice">NT$${product.origin_price}</del>
      <p class="nowPrice">NT$${product.price}</p>
    `;
    productWrap.appendChild(productCard);
  });

  // 添加事件監聽器
  const addCardBtns = document.querySelectorAll(".addCardBtn");
  addCardBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const productId = btn.getAttribute("data-id");
      const productTitle = btn.getAttribute("data-title");
      const productPrice = btn.getAttribute("data-price");
      const productImage = btn.previousElementSibling.getAttribute("src");

      addToCart(productId, productTitle, productPrice);
      updateCartDisplay({
        id: productId,
        title: productTitle,
        price: productPrice,
        image: productImage,
      });
    });
  });
}

/**
 * 初始化函數，獲取產品數據並渲染
 */
export async function init() {
  const products = await fetchProducts();
  renderProducts(products);
}

// 調用初始化函數
init();
