import { Link } from "react-router-dom";

function Section({ title, link }) {
    return (
        <Link to={link} className="link-to-section" >{title}</Link>
    );
}

export default Section;