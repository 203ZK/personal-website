import styles from "../styles/project-link.module.css"

function Project({ source, title }) {
    return (
        <div className={styles.project}>
            <img src={source} className={styles.thumbnail} />
            <p className={styles.projectTitle}>{title}</p>
        </div>
    );
}

export default Project;