import Navbar from "./Navbar";
import Event from "./Event";
import "../../styles/experiences.css";

function Experiences() {
  return (
    <>
      <Navbar />
      <div className="timelines">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-middle">

            <div className="event" id="nus">
              <div className="event-marker"></div>
              <div className="event-text">
                <p className="event-title">National University of Singapore</p>
                <p className="event-year">2024 - 2028</p>
                <div className="event-description">
                  Currently studying Double Major in Computer Science and Mathematics.
                  <p>Courses taken:</p>
                  <ul>
                    <li>CS1101S Programming Methodology I (A)</li>
                    <li>CS1231S Discrete Structures (A+)</li>
                    <li>MA1522 Linear Algebra for Computing (A+)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="event" id="njc">
              <div className="event-marker"></div>
              <div className="event-text">
                <p className="event-title">National Junior College</p>
                <p className="event-year">2016 - 2021</p>
                <div className="event-description">
                  <p>Completed a 6-year IP programme.</p>
                  <p>GCE 'A' Levels: H2 Mathematics, H2 Chemistry, H2 Physics, H1 Economics (88.75 RP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;