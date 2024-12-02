import { baseService, adminService } from "./baseServices";
const headers = {
  Authorization: `${import.meta.env.VITE_API_UID}`,
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
