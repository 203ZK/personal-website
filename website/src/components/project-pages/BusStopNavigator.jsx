import Section from "../Section";

import busGif from "../../media/bus-gif.gif";
import styles from "../../styles/projects-indiv.module.css";

function BusStopNavigator() {
    return (
        <>
            <div className={styles.projectIntro}>
                <span className={styles.h2}>Bus Stop Navigator</span>
                <span className={styles.progressTag}>In Progress</span>
                <img src={busGif} className={styles.projectGif} />
                <p className={styles.projectDescription}>
                    The motivation for this project was a simple one: I realised that sometimes when I'm taking the train, it was troublesome to determine how to get to the nearby bus stops, since the maps in MRT stations only point you to the <i>bus stop codes</i>, and not the <i>names of the bus stops themselves</i>.
                    <br/><br/>
                    To solve this hassle, I decided to build a navigator for this purpose, using <strong>React</strong> and <strong>Node.js</strong> for my frontend and backend respectively. I also used <strong>PostgreSQL</strong> to store the data for the application and used <strong>Express</strong> to fetch the data from the database.
                </p>
                
                <div className={styles.returnSection}>
                    <Section title="Back to Projects" link="/projects" />
                    <Section title="Go to GitHub" link="https://github.com/203ZK/bus-stop-locator" target="__blank" />
                </div>
            </div>
        </>
    );
}

export default BusStopNavigator;