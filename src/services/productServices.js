import { baseService } from "./baseServices";

// 獲取產品列表
const getProducts = async () => {
  try {
    const response = await baseService.get("/products");

    if (!response.data || !Array.isArray(response.data.products)) {
      throw new Error("獲取的產品數據格式不正確");
    }

    return response.data.products;
  } catch (error) {
    console.error("獲取產品時出現錯誤:", error);
    throw error;
  } finally {
    console.log("請求完成");
  }
};

export default getProducts;
