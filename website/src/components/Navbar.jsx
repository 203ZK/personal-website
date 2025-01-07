import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <span className="nav-link"><Link to="/"><strong>Peh Hou Jin</strong></Link></span>
            <span className="nav-link" id="experiences"><Link to="/education-and-experiences">Experiences</Link></span>
            <span className="nav-link" id="projects"><Link to="/projects">Projects</Link></span>
            <span className="nav-link" id="interests"><Link to="/interests">Interests</Link></span>
            <span className="nav-link" id="contact"><Link to="contact-me">Contact Me</Link></span>
        </nav>
    );
}

export default Navbar;