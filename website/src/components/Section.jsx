import { Link } from "react-router-dom";
import styles from "../styles/section.module.css";

function Section({ title, link }) {
    return (
        <Link to={link} className={styles.sectionLink}>{title}</Link>
    );
}

export default Section;