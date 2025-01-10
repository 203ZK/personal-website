import Navbar from "../Navbar";
import styles from "../../styles/experiences.module.css";

function Experiences() {
  return (
    <>
      <Navbar />

      <div className={styles.timelineHeadings}>
        <div className={styles.heading}><h2>Education</h2></div>
        <div className={styles.heading}><h2>Experiences</h2></div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.container}>
          <div className={`${styles.textBox} ${styles.leftContainer}`}>
            <h3>National University of Singapore</h3>
            <small>2024 - 2028</small>
            <p className={styles.description}>Currently studying Double Major in Computer Science and Mathematics.</p>
            <span className={styles.leftArrow}></span>
          </div>

          <div className={`${styles.textBox} ${styles.rightContainer}`}>
            <h3>Product Intern (SQL View)</h3>
            <small>Apr - Jul 2024</small>
            <p className={styles.description}>Automated synchronisation of employees' timesheets with contract updates, and created insightful visualisations of projects' progress.</p>
            <p className={styles.description}>Worked with UX team on launching product landing pages and customers' purchase journeys, as well as designing product modules to enhance user experience.</p>
            <span className={styles.rightArrow}></span>
          </div>

          <div className={`${styles.textBox} ${styles.rightContainer}`}>
            <h3>Artillery Operator</h3>
            <small>Mar 2022 - Mar 2024</small>
            <p className={styles.description}>Completed National Service as an artillery operator.</p>
            <span className={styles.rightArrow}></span>
          </div>

          <div className={`${styles.textBox} ${styles.rightContainer}`}>
            <h3>MOE Teaching Intern</h3>
            <small>Jan - Mar 2022</small>
            <p className={styles.description}>Taught Mathematics and Chemistry to Secondary 1 and 3 students as part of the MOE Teaching Intership.</p>
            <p className={styles.description}>Teacher-in-charge of a CCA (ODAC) and facilitated an enrichment programme, training students for the International United Nations Model Conference.</p>
            <span className={styles.rightArrow}></span>
          </div>

          <div className={`${styles.textBox} ${styles.leftContainer}`}>
            <h3>National Junior College</h3>
            <small>2016 - 2021</small>
            <p className={styles.description}>Completed 6-year IP programme (88.75 RP).</p>
            <span className={styles.leftArrow}></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;