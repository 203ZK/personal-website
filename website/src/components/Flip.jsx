import Navbar from "./Navbar";
import Section from "./Section";

import flipGif from "../media/flip-gif.gif";

function Flip() {
    const divStyle = {
        maxWidth: "700px",
        margin: "5vh auto",
        padding: "0 30px"
    };
    const gifStyle = {
        display: "block",
        maxWidth: "400px",
        margin: "0 auto"
    };

    return (
        <>
            <Navbar />

            <div className="projects-intro" style={divStyle}>
                <h2><i>Flip!</i></h2>
                <img src={flipGif} style={gifStyle} />
                <p className="projects-description">
                    This idea of a mini logic puzzle game came to me when I was exploring different modules in Python, and I wanted to make something using <strong>Pygame</strong>.
                    <br/><br/>
                    In this game, players try to recreate the pattern of "bits" within the given number of moves. Within each move, the player is allowed to "flip" the colour of the bits, and they're also allowed to shift/rotate the bits into position.
                    <br/><br/>
                    While it wasn't the most impressive game, it was the first time that I had attempted building something without guidance, and I certainly enjoyed tinkling with it!
                </p>
                
                <Section title="Back to Projects" link="/projects" />
            </div>
        </>
    );
}

export default Flip;