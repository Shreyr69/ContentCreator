import axios from "axios";
import { errorToast } from "../utils/toast";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Don't show error toast for expected 401s on /auth/me
    if (error.response?.status === 401 && !error.config?.url?.includes('/auth/me')) {
      errorToast("Unauthorized request")
      window.location.href = '/login';
      console.log("Unauthorized request");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;