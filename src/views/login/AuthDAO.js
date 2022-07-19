import {handler} from "../../utils/Handler";
import axios from "../../utils/AxiosInstance";

export const login = async (model) => {
    try {
        /*const res = await axios.post("/auth/login", model);
        return res.data;*/
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('token');
            }, 1500);
        });
    } catch (e) {
        handler(e);
    }
}