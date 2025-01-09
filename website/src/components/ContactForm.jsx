import emailjs from "emailjs-com";
import Section from "./Section";

import styles from "../styles/contact-me.module.css";

const SERVICE_ID = "service_dsoka93";
const TEMPLATE_ID = "template_gziquxd";
const USER_ID = "GO1qRutcIdFpcGPu9";

function ContactMe() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((response) => window.location.reload(),
                  (error) => console.log(error.text));
    }

    return (
        <form className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.inputField}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
            </div>

            <div className={styles.inputField}>
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div className={styles.inputField}>
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" required />
            </div>

            <input type="submit" value="Send Message" />
        </form>
    );
}

export default ContactMe;