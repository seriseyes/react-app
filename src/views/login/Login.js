import TextField from "../../components/form/TextField";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Column from "../../components/layout/Column";
import logo from "../../assets/images/logo.svg";
import {login} from "./AuthDAO";
import {toast} from "react-toastify";
import Loading from "../../components/ui/Loading";

export default function Login() {
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const onLogin = async () => {
        if (loading) return;

        setLoading(true);
        const token = await login(state);
        if (token) {
            toast.success("Амжилттай нэвтэрлээ");
            navigate("/app/home");
        }
        setLoading(false);
    };

    return (
        <Column style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
            <Column style={{gap: "10px", width: "100%", maxWidth: "400px", padding: "0 15px", boxSizing: "border-box"}}>
                <img src={logo} alt="react logo" style={{alignSelf: "center", width: "100px"}}/>
                <h1 style={{alignSelf: "center"}}>Нэвтрэх</h1>
                <TextField onChange={onChange} value={state.username} name={"username"} caption={"Нэвтрэх нэр"}/>
                <TextField onChange={onChange} value={state.password} name={"password"} caption={"Нууц үг"}
                           type={"password"}/>
                <button onClick={onLogin} className={"button primaryBg"}>{<Loading isLoading={loading}/>} {loading || "Нэвтрэх"}</button>
            </Column>
        </Column>
    );
}