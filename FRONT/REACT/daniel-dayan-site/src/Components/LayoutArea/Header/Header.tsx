import { NavLink } from "react-router-dom";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
			<NavLink to = '/home' ><h1>Daniel Dayan Site</h1></NavLink>
        </div>
    );
}

export default Header;
