import baseService from "./baseService";

// 獲取購物車內容
export const getCarts = async () => {
  try {
    const response = await baseService.get("/carts");

    if (!response.data || !Array.isArray(response.data.carts)) {
      throw new Error("獲取的購物車數據格式不正確");
    }

    return response.data.carts;
  } catch (error) {
    console.error("獲取產品時出現錯誤:", error);
    throw error;
  } finally {
    console.log("請求完成");
  }
};

// 添加到購物車
export const addToCart = async (productId, quantity = 1) => {
  const data = {
    data: {
      productId,
      quantity,
    },
  };
  await baseService.post("/carts", data);
};

// 刪除購物車項目
export const deleteCart = async (cartId) => {
  await baseService.delete(`/carts/${cartId}`);
};
