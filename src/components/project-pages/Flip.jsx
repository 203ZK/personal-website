import Section from "../Section";

import flipGif from "../../media/flip-gif.gif";
import styles from "../../styles/projects-indiv.module.css";

function Flip() {
    return (
        <>
            <div className={styles.projectIntro}>
                <h2><i>Flip!</i></h2>
                <img src={flipGif} className={styles.projectGif} />
                <p className={styles.projectDescription}>
                    This idea of a mini logic puzzle game came to me when I was exploring different modules in Python, and I wanted to make something using <strong>Pygame</strong>.
                    <br/><br/>
                    In this game, players try to recreate the pattern of "bits" within the given number of moves. Within each move, the player is allowed to "flip" the colour of the bits, and they're also allowed to shift/rotate the bits into position.
                    <br/><br/>
                    While it wasn't the most impressive game, it was the first time that I had attempted building something without guidance, and I certainly enjoyed tinkling with it!
                </p>
                
                <div className={styles.returnSection}>
                    <Section title="Back to Projects" link="/projects" />
                    <Section title="Go to GitHub" link="https://github.com/203ZK/flip/" target="__blank" />
                </div>
            </div>
        </>
    );
}

export default Flip;