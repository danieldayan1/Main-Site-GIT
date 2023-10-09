import { NavLink } from "react-router-dom";
import "./Header.css";
import Marquee from "react-fast-marquee";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<NavLink to = '/home' ><h1>Daniel Dayan Site</h1></NavLink>
            <Marquee>Welcome To Daniel Dayan Site !</Marquee>
        </div>
    );
}

export default Header;
