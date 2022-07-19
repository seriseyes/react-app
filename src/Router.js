import {Link, Route, Routes} from "react-router-dom";
import Login from "./views/login/Login";
import App from "./views/app/App";
import {store} from './redux/Store';
import {Provider} from 'react-redux'

export default function Router() {
    return (
        <Provider store={store}>
            <div style={{width: "100%", height: "100%"}}>
                <Routes>
                    <Route path="/app/*" element={<App/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

function NoMatch() {
    return <div>Хуудас олдсонгүй. <Link to={"/"}>Энд дарж буцна уу.</Link></div>;
}