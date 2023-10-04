import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import ContactForm from "../shared/form/Form"

const ContactSection = () => {
    return (
        <section id="contact-us">
            <h2>Join Us on Your<br />App Development Journey</h2>
            <p>We invite you to embark on a transformative journey with <span>AppCrafters</span>. Whether you're a startup aiming to disrupt the market or an established business seeking digital innovation, our team is here to guide you at every step. Together, we'll build apps that captivate, resonate, and make a lasting impact.</p>
            <p>Contact us today to discuss your project and discover how we can turn your app dreams into reality. Welcome to the future of app development!</p>
            <address>
                <h3>Contact Us</h3>
                <ul>
                    <li>14 Beckett Close, London, United Kingdom, SW16 1AN</li>
                    <li>Email: info@appcrafters.com</li>
                    <li>Phone: +44 123 456 789</li>
                </ul>
            </address>
            <ContactForm />
            <div className="socials" style={{textAlign: "center"}}>
                <h4>Connect With Us</h4>
                <ul>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default ContactSection