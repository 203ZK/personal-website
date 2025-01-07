import Navbar from "../Navbar";
import Project from "../Project";
import styles from "../../styles/projects.module.css";

import flipThumbnail from "../../media/flip-thumbnail.png";
import hdbThumbnail from "../../media/hdb-thumbnail.png";
import todoThumbnail from "../../media/todo-thumbnail.png";
import busThumbnail from "../../media/bus-thumbnail.png";
import websiteThumbnail from "../../media/website-thumbnail.png";

function Projects() {
    return (
        <>
            <Navbar />

            <div className={styles.projectsIntro}>
                <h2>Projects</h2>
                <p className="projects-description">As I went on my programming journey, picking up various languages and frameworks, I wanted to have a neat way to showcase my progress, and here they are! Click into each project to find out more about how I created them, and what I've learnt.</p>
            </div>
            
            <div className={styles.projectsGrid}>
                <Project source={flipThumbnail} title="Flip!" />
                <Project source={hdbThumbnail} title="HDB Resale Prices Analysis" />
                <Project source={todoThumbnail} title="To-Do-List" />
                <Project source={busThumbnail} title="Bus Stop Navigator" />
                <Project source={websiteThumbnail} title="Personal Website" />
                {/* <Project source="../media/new.png" title="" /> */}
            </div>
        </>
    );  
}

export default Projects;