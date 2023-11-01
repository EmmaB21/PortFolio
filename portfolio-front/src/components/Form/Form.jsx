import linkedin from "../../img/icones/LinkedIn.webp"
import github from "../../img/icones/github.webp"
import mail from "../../img/icones/mail.webp"


const Form = () => {

    return (
        <div className="contact">
            <div className="contact-links">
                <h2 className="contact-links-title">CONTACT</h2>
                <div className="links">
                    <div className="link">
                        <a href="github"><img src={github} alt="github" /></a>
                    </div>
                    <div className="link">
                        <a href="linkedin"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div className="link">
                        <a href="email"><img src={mail} alt="email" /></a>
                    </div>
                </div>
            </div>
            <div className="contact-form-wrapper">
                <form>
                    <div className="form-item">
                        <input type="text" name="sender" required />
                        <label>Name:</label>
                    </div>
                    <div className="form-item">
                        <input type="text" name="email" required />
                        <label>Email:</label>
                    </div>
                    <div className="form-item">
                        <textarea className="" name="message" required></textarea>
                        <label>Message:</label>
                    </div>
                    <button className="submit-btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form;