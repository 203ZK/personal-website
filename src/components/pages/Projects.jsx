import { Outlet } from "react-router";
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