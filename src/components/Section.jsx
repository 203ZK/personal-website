import { Link } from "react-router";
import styles from "../styles/section.module.css";

function Section({ title, link, target }) {
    return (
        <Link to={link} className={styles.sectionLink} target={target}>{title}</Link>
    );
}

export default Section;