import Navbar from "./Navbar";
import Event from "./Event";
import "../../styles/experiences.css";

function Experiences() {
  return (
    <>
      <Navbar />
      <div className="timeline">
        <div className="container">
          <div className="text-box left-container">
            <h3>National University of Singapore</h3>
            <small>2024 - 2028</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque tincidunt finibus. Sed vel urna ut ex venenatis vulputate. Sed nec erat eu nulla semper lobortis at eget leo. Aliquam erat volutpat.</p>
          </div>

          <div className="text-box right-container">
            <h3>Product Intern</h3>
            <small>Apr - Jul 2024</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque tincidunt finibus. Sed vel urna ut ex venenatis vulputate. Sed nec erat eu nulla semper lobortis at eget leo. Aliquam erat volutpat.</p>
          </div>

          <div className="text-box right-container">
            <h3>Artillery Operator</h3>
            <small>Mar 2022 - Mar 2024</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque tincidunt finibus. Sed vel urna ut ex venenatis vulputate. Sed nec erat eu nulla semper lobortis at eget leo. Aliquam erat volutpat.</p>
          </div>

          <div className="text-box right-container">
            <h3>MOE Teaching Intern</h3>
            <small>Jan - Mar 2022</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque tincidunt finibus. Sed vel urna ut ex venenatis vulputate. Sed nec erat eu nulla semper lobortis at eget leo. Aliquam erat volutpat.</p>
          </div>

          <div className="text-box left-container">
            <h3>National Junior College</h3>
            <small>2016 - 2021</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;