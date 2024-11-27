import axios from "axios";
import { BASE_URL, API_PATH } from "../config";

const baseService = axios.create({
  baseURL: `${BASE_URL}${API_PATH}`,
});

// 可以添加請求攔截器
baseService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 可以添加響應攔截器
baseService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API 錯誤:", error);
    return Promise.reject(error);
  },
);

export default baseService;
