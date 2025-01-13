import Navbar from "../Navbar";
import Section from "../Section";

import styles from "../../styles/home-page.module.css";
import pic from "../../media/profile.jpg";
import pdf from "../../media/Resume.pdf";
import ghLogo from "../../media/github-mark.png";
import liLogo from "../../media/linkedin-mark.png";

function HomePage() {
    return (
        <>
            <Navbar />

            <div className={styles.intro}>
                <a href={pdf} without="true" rel="noopener noreferrer" target="_blank"><img id={styles.profilePic} src={pic} alt="profile picture" /></a>
                <p className={styles.introText}>
                    Hi! I'm <strong>Hou Jin</strong>, a Computer Science student at the National University of Singapore. 
                    <br/><br/>
                    Click the links below to learn more about what I do!
                </p>
            </div>

            <div className={styles.sectionsContainer}>
                <Section title="Education & Experiences" link="/education-and-experiences" />
                <Section title="Projects" link="/projects" />
                {/* <Section title="Interests" link="/interests" /> */}
            </div>

            <div className={styles.otherMedia}>
                <span className={styles.mediaText}>Check out my other platforms here: </span>
                <div className={styles.logoBtn}>
                    <a href="https://github.com/203ZK" target="_blank"><img src={ghLogo} className={styles.logo} alt="GitHub logo" /></a>
                    <span className={styles.logoText}>GitHub</span>
                </div>
                <div className={styles.logoBtn}>
                    <a href="https://www.linkedin.com/in/peh-hou-jin-9317921a9/" target="_blank"><img src={liLogo} className={styles.logo} alt="LinkedIn logo" /></a>
                    <span className={styles.logoText}>LinkedIn</span>
                </div>
            </div>
        </>
    );
}

export default HomePage;