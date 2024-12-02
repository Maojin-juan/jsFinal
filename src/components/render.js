import getProducts from "../services/productServices";
import { renderProducts } from "./products/renderProducts";
import { renderFilter } from "./filter/renderFilter";
import { filterProducts } from "./filter/filterProducts";

import { getCarts } from "../services/cartServices";
import renderCarts from "./cart/renderCarts";

import { getOrders } from "../services/orderServices";
import { renderOrders } from "./order/renderOrders";

async function initialRender() {
  /* 產品渲染 */
  const products = await getProducts();
  renderProducts(products);
  renderFilter(products);
  filterProducts(products);

  /* 購物車渲染 */
  const cartData = await getCarts();
  renderCarts(cartData);

  /* 後台選染 */
  const orderData = await getOrders();
  renderOrders(orderData);
}

initialRender();
