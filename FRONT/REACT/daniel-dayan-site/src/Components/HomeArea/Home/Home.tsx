import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {

    return (
        <div className="Home">
			<div>
                <div className="cell"><a href="https://daniel-dayan-cv.netlify.app" target="blank">CV</a></div>
                <div  className="cell"><a href="https://www.linkedin.com/in/daniel-dayan-457213bb/" target="blank">Linkedin</a></div>
                <div  className="cell"><a href="https://github.com/danieldayan1" target="blank">GIT</a></div>
            </div>
        </div>
    );
}

export default Home;
