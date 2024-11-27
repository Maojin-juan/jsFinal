import baseService from "./baseServices";

// 獲取購物車內容
export const getCarts = async () => {
  try {
    const response = await baseService.get("/carts");

    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的購物車數據格式不正確");
    }

    return response.data;
  } catch (error) {
    console.error("獲取產品時出現錯誤:", error);
    throw error;
  } finally {
    console.log("請求完成");
  }
};

// 添加到購物車
export const addToCart = async (productId, quantity = 1, cartId = null) => {
  try {
    const data = {
      productId,
      quantity,
    };

    if (cartId) {
      await baseService.patch(`/carts`, { data });
      console.log("更新購物車數量成功");
    } else {
      // 否則使用 POST 添加新項目
      await baseService.post("/carts", { data });
      console.log("加入購物車成功");
    }

    return data;
  } catch (error) {
    console.error("加入購物車時出現錯誤:", error);
    throw error;
  } finally {
    console.log("請求完成");
  }
};

// 刪除購物車項目
export const deleteCart = async (cartId) => {
  await baseService.delete(`/carts/${cartId}`);
};
