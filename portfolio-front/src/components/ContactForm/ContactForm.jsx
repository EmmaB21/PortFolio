import { useState } from "react"

import linkedin from "../../img/icones/LinkedIn.webp"
import github from "../../img/icones/github.webp"
import emailjs from "@emailjs/browser"


const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = (e) => {
        e.preventDefault() 
        emailjs.sendForm('service_45jz4c9', 'template_z9921nq', '#form', '3uRhu7iLUjYSllHRe')
            .then((result) => {
                setIsSubmitted(true)
                console.log(result.text);
                setTimeout(function () {
                    e.target.reset(); // On réinitialise le formulaire
                    setIsSubmitted(false);
                }, 1000);
                
            }, (error) => {
                console.log(error.text)
            })

    }

    return (
        <div className="contact">
            <div className="contact-links">
                <h2 className="contact-links-title">CONTACT</h2>
                <div className="links">
                    <div className="link">
                        <a href="https://github.com/EmmaB21" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                    </div>
                    <div className="link">
                        <a href="https://www.linkedin.com/in/emmanuelle-bertrand-278ab5267/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                    
                </div>
            </div>
            <div className="contact-form-wrapper">
                <form id='form'className="contact-form"
                    onSubmit={submitForm}
                >
                    <div className="form-item">
                        <input type="text" name="sender" id="sender" required />
                        <label htmlFor="sender">Nom:</label>
                    </div>
                    <div className="form-item">
                        <input type="text" name="email" id="email" required />
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="form-item">
                        <textarea className="" name="message" id="message" required></textarea>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <button type="submit" className="submit-btn">
                        {isSubmitted ? "Envoyé !" : "Envoyer"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form;