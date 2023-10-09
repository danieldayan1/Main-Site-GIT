import { Navigate, Route, Routes } from "react-router-dom";
import NotFound404 from "../NotFound404/NotFound404";
import Home from "../../HomeArea/Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/*" element={<NotFound404 />}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
