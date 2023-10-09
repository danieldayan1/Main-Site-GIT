import "./Footer.css";
import { useEffect , useState } from "react";

function Footer(): JSX.Element {

    const [time,setTime] = useState<String>(" ")
    const date = new Date().toLocaleDateString()

    useEffect(()=>{ 

        setInterval(
            ()=>{setTime(new Date().toLocaleTimeString())},1000
        ) 

        return(()=>{clearInterval(0)})
    },[])

    return (
        <div className="Footer">
            <p>All Rights Reserved  &copy; {date}  {time}</p>
        </div>
    );
}

export default Footer;
