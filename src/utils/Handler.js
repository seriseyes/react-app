/**
 * HTTP хүсэлтийн хариуг уншиж тохирох notification харуулах
 *
 * Баярхүү.Лув, 2022.03.15 14:57 @mitpc llc
 */
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export function handler(err) {
    if (!err || !err.response) {
        toast.error("Тодорхойгүй алдаа гарлаа");
        return;
    }
    if (err.response.status === 401) {
        toast.error(<div>
            Хандалтын хугацаа дууссан байна.
            <Link to={"/login"}> Энд дарж дахин нэвтэрнэ үү</Link>
        </div>, {autoClose: 5000});
        return;
    }
    toast.error(err.response.data ? err.response.data : err.message);
}