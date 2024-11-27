import getProducts from "../services/productServices";
import { renderProducts } from "./products/renderProducts";
import { renderFilter } from "./filter/renderFilter";
import { filterProducts } from "./filter/filterProducts";

async function initialRender() {
  const products = await getProducts();

  renderProducts(products);
  renderFilter(products);
  filterProducts(products);
}

initialRender();
