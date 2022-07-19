import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Navbar from "./components/Navbar";
import Settings from "../settings/Settings";

export default function App() {
    return <div>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </div>;
}