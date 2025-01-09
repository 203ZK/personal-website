import Section from "../Section";

import hdbThumbnail from "../../media/hdb-thumbnail.png";
import styles from "../../styles/projects-indiv.module.css";

function HDB() {
    return (
        <>
            <div className={styles.projectIntro}>
                <h2>Exploratory Data Analysis of HDB Resale Prices</h2>
                <img src={hdbThumbnail} className={styles.projectGif} />
                <p className={styles.projectDescription}>
                    While I was in National Service, I attended <strong>Google's online Data Analytics course</strong>, where I picked up fundamental techniques in data analysis, such as <strong>data cleaning</strong>, <strong>SQL</strong> and <strong>R</strong>. 
                    <br/><br/>
                    While it was engaging, I decided that the best way to practice these skills is to create something out of it. Looking around for data, I stumbled across a dataset of Singapore's HDB resale prices, so I began performing an EDA to see if I could derive any interesting observations from the industry.
                    <br/><br/>
                    In the EDA, I analysed the relationships between several key variables, such as resale prices, maturity of towns, flat types, etc. Feel free to take a look at my complete analysis in my GitHub linked below!
                </p>
                
                <div className={styles.returnSection}>
                    <Section title="Back to Projects" link="/projects" />
                    <Section title="Go to GitHub" link="https://github.com/203ZK/Data-Analysis-HDB-Resale-Prices" target="__blank" />
                </div>
            </div>
        </>
    );
}

export default HDB;