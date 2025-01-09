import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Projects() {
    return (
        <>
            <Navbar />
            <Outlet />            
        </>
    );  
}

export default Projects;