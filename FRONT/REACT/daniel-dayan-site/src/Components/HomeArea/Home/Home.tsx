import "./Home.css";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { link } from "fs";
import repositoryModel from "../../../Models/repositoryModel";
import repositoryService from "../../../Services/repositoriesService";




function Home(): JSX.Element {

    const [title,setTitle] = useState<String>(" ");
    const [repos,setRepos] = useState<repositoryModel[]>([])

    const calcTitle = () =>{
        let time = new Date();
        if(time.getHours()>=0 && time.getHours()<=12){
            setTitle("GOOD MORNING !");
        }else if(time.getHours()>12 && time.getHours()<=18){
            setTitle("GOOD AFTERNOON !");
        }else{
            setTitle("GOOD NIGHT !");
        }
    }

    useEffect(()=>{ 

        repositoryService.fetchAllRepositories()
        .then(repositories=>{setRepos(repositories)})
        .catch(err=>alert(err))

        calcTitle();
        setInterval(
            ()=>{calcTitle();
            },60000) 

        return(()=>{clearInterval(0)})
    },[])


    return (
        <div className="Home">

    <div className="btn-group" role="group" aria-label="Basic example">
        <a href="https://daniel-dayan-cv.netlify.app" target="blank" style={{color:"black"}}><button type="button" className="btn btn-secondary" style={{paddingLeft:"235px",paddingRight:"235px"}}>CV</button></a>
        <a href="https://www.linkedin.com/in/daniel-dayan-457213bb/" target="blank" style={{color:"black"}}><button type="button" className="btn btn-secondary" style={{paddingLeft:"235px",paddingRight:"235px"}}>Linkedin</button></a>
        <a href="https://github.com/danieldayan1" target="blank" style={{color:"black"}}><button type="button" className="btn btn-secondary" style={{paddingLeft:"235px",paddingRight:"235px"}}>GIT</button></a>
    </div>
    <br/><br/>
    <div style={{textAlign:"center"}}>{title&&<h2>{title}</h2>}</div>

    <div style={{marginTop:"250px"}}>
        <Marquee><span style={{fontSize:"20px"}}>Welcome To Daniel Dayan Site !</span></Marquee>
    </div>
</div>
    );
}

export default Home;
