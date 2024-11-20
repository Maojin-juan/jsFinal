import axios from "axios";

const apiUrl =
  "https://livejs-api.hexschool.io/api/livejs/v1/customer/maojin/products";

/**
 * Validate the API URL.
 * @param {string} url - The API URL to validate.
 * @throws Will throw an error if the URL is invalid.
 */
function validateApiUrl(url) {
  if (typeof url !== "string" || !url) {
    throw new Error("Invalid API URL");
  }
}

/**
 * Fetch products from the API.
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 */
export async function fetchProducts() {
  validateApiUrl(apiUrl); // Validate the API URL

  try {
    const response = await axios.get(apiUrl);
    return response.data.products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      origin_price: product.origin_price,
      image: product.images,
    }));
  } catch (error) {
    if (error.response) {
      console.error(
        `Error fetching products: ${error.response.status} - ${error.response.data}`,
      );
    } else {
      console.error("Error fetching products:", error.message);
    }
    return [];
  } finally {
    console.log("Fetch products request completed.");
  }
}
