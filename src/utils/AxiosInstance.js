import axios from "axios";

/**
 * Axios default тохиргоо
 */
const axiosInstance = axios.create({
    withCredentials: true
});
export default axiosInstance
