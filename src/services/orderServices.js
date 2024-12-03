import { baseService, adminService } from "./baseServices";
const headers = {
  Authorization: `${import.meta.env.VITE_API_UID}`,
};

// 送出訂單
export const postOrder = async (data) => {
  if (data.data.carts.length === 0) {
    alert("購物車為空，請添加商品後再提交訂單。");
    return;
  }

  try {
    const response = await baseService.post("/orders", data);

    alert("訂單提交成功！");
    return response.data;
  } catch (error) {
    console.error(
      "送出訂單時出現錯誤:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  } finally {
    console.log("送出訂單的請求結束");
  }
};

// 取得訂單
export const getOrders = async () => {
  try {
    const response = await adminService.get("/orders", { headers });
    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的訂單數據格式不正確");
    }

    return response.data;
  } catch (error) {
    console.error("獲取訂單時出現錯誤:", error);
    throw error;
  } finally {
    console.log("獲取訂單的請求結束");
  }
};

export const putOrders = async (orderId, paidStatus) => {
  try {
    const response = await adminService.put(
      `/orders`,
      { data: { id: orderId, paid: paidStatus } },
      { headers },
    );

    alert("訂單修改成功！");
    return response.data;
  } catch (error) {
    console.error(
      "修改訂單時出現錯誤:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  } finally {
    console.log("修改訂單的請求結束");
  }
};

// 刪除購物車項目
export const deleteOrderItem = async (orderId) => {
  try {
    const response = await adminService.delete(`/orders/${orderId}`, {
      headers,
    });

    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的訂單數據格式不正確");
    }

    alert("刪除訂單項目！");
    return response.data;
  } catch (error) {
    console.error("刪除訂單項目時出現錯誤:", error);
    throw error;
  } finally {
    console.log("刪除訂單項目請求結束");
  }
};

// 刪除所有訂單項目
export const deleteAllOrderItem = async () => {
  try {
    const response = await adminService.delete("/orders", { headers });

    if (!response.data || typeof response.data !== "object") {
      throw new Error("獲取的訂單數據格式不正確");
    }

    alert("刪除訂單所有品項！");
    return response.data;
  } catch (error) {
    console.error("刪除訂單所有品項時出現錯誤:", error);
    throw error;
  } finally {
    console.log("刪除訂單所有品項請求結束");
  }
};
