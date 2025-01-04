import pic from "./profile.jpg";

function Intro() {
    return (
        <div className="intro">
            <img className="profile-pic" src={pic} alt="Profile picture" />
            <p className="intro-text">
                Hi! I'm <strong>Hou Jin</strong>, a Computer Science student at the National University of Singapore. 
                <br/><br/>
                Click the links below to learn more about what I do!
            </p>
        </div>
    );
}

export default Intro;