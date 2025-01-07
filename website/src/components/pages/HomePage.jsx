import Navbar from "../Navbar";
import Section from "../Section";

import styles from "../../styles/home-page.module.css";
import pic from "../../media/profile.jpg";

function HomePage() {
    return (
        <>
            <Navbar />

            <div className={styles.intro}>
                <img id={styles.profilePic} src={pic} alt="profile picture" />
                <p className={styles.introText}>
                    Hi! I'm <strong>Hou Jin</strong>, a Computer Science student at the National University of Singapore. 
                    <br/><br/>
                    Click the links below to learn more about what I do!
                </p>
            </div>

            <div className={styles.sectionsContainer}>
                <Section title="Education & Experiences" link="/education-and-experiences" />
                <Section title="Projects" link="/projects" />
                <Section title="Interests" link="/interests" />
            </div>
        </>
    );
}

export default HomePage;