import { Link } from "react-router";

import styles from "../styles/project-link.module.css"

function Project({ projectLink, source, title }) {
    return (
        <div className={styles.project}>
            <Link to={projectLink}><img src={source} className={styles.thumbnail} /></Link>
            <p className={styles.projectTitle}>{title}</p>
        </div>
    );
}

export default Project;