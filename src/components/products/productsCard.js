export function productsCard(item) {
  return `
    <li class="productCard">
      <h4 class="productType">新品</h4>
      <img src="${item.images}" alt="">
      <button type="button" class="w-full addToCart" data-id="${item.id}">加入購物車</button>
      <h3>${item.title}</h3>
      <del class="originPrice">NT$${item.origin_price}</del>
      <p class="nowPrice">NT$${item.price}</p>
    </li>
  `;
}

export default productsCard;
