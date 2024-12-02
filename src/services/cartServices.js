import { baseService } from "./baseServices";

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
    console.log("獲取購物車請求結束");
  }
};

// 添加至購物車
export const addToCart = async (id, quantity = 1, existingItem) => {
  try {
    let data;
    if (existingItem) {
      data = {
        id: id,
        quantity: quantity,
      };
      const response = await baseService.patch(`/carts`, { data });

      alert("更新購物車數量成功");
      return response;
    } else {
      data = {
        productId: id,
        quantity: quantity,
      };
      const response = await baseService.post("/carts", { data });

      alert("加入購物車成功");
      return response;
    }
  } catch (error) {
    console.error("加入購物車時出現錯誤:", error);
    throw error;
  } finally {
    console.log("添加至購物車請求結束");
  }
};

// 刪除購物車項目
export const deleteCartItem = async (cartId) => {
  try {
    const response = await baseService.delete(`/carts/${cartId}`);

    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的購物車數據格式不正確");
    }

    alert("刪除購物車項目！");
    return response.data;
  } catch (error) {
    console.error("刪除購物車項目時出現錯誤:", error);
    throw error;
  } finally {
    console.log("刪除購物車項目請求結束");
  }
};

// 刪除所有購物車項目
export const deleteAllCartItem = async () => {
  try {
    const response = await baseService.delete(`/carts`);

    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的購物車數據格式不正確");
    }

    alert("刪除購物車所有品項！");
    return response.data;
  } catch (error) {
    console.error("刪除購物車所有品項時出現錯誤:", error);
    throw error;
  } finally {
    console.log("刪除購物車所有品項請求結束");
  }
};
