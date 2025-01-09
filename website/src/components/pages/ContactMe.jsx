import Navbar from "../Navbar";
import ContactForm from "../ContactForm";

function ContactMe() {
    const styles = {
        maxWidth: "700px",
        margin: "5vh auto",
        padding: "0 50px"
    };

    return (
        <>
            <Navbar />

            <div className="form-container" style={styles}>
                <h2 style={{marginBottom: "30px"}}>Contact Me</h2>
                <ContactForm />
            </div>
        </>
    );
}

export default ContactMe;