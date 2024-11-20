import { fetchProducts } from "./fetchProducts.js"; // 引入 fetchProducts 函數

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
      <a href="#" class="addCardBtn" data-id="${product.id}">加入購物車</a>
      <h3>${product.title}</h3>
      <del class="originPrice">NT$${product.origin_price}</del>
      <p class="nowPrice">NT$${product.price}</p>
    `;
    productWrap.appendChild(productCard);
    console.log("productCard");
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
