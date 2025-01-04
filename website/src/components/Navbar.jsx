import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <span className="nav-link"><a href="/" id="my-name">Peh Hou Jin</a></span>
            <span className="nav-link"><a href="/education-and-experiences">Experiences</a></span>
            <span className="nav-link"><a href="/projects">Projects</a></span>
            <span className="nav-link"><a href="/about-me">Interests</a></span>
            <span className="nav-link"><a href="/contact-me">Contact Me</a></span>
        </nav>
    );
}

export default Navbar;