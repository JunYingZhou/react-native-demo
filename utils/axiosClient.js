// apiClient.js
import axios from 'axios';

const API_BASE_URL = 'http://47.115.50.181:8080'; // 替换为你的 API 基础 URL

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器（如需要添加认证信息）
axiosClient.interceptors.request.use(
  (config) => {
    // 你可以在这里添加认证 token 或其他逻辑
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器（如需要处理错误）
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    if (response && response.status >= 400 && response.status < 500) {
      // 处理客户端错误
    } else if (response && response.status >= 500) {
      // 处理服务器错误
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
