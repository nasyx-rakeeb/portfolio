import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import {useRef} from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_24c9p3s", "template_gs857xw", form.current, "1Dlf91N7z5rJyOXzG")
    e.target.reset()
    
  }
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nasyxrakeeb2@gmail.com</h5>
            <a rel="noreferrer" target="_blank" href="mailto:nasyxrakeeb2@gmail.com">Send Email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>nasyxrakeeb</h5>
            <a target="_blank" href="/">Send Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+916006553613</h5>
            <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+916006553613">Send Email</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
    )
}

export default Contact











































