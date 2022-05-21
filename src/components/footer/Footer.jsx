import "./footer.css"
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">Nasyx Rakeeb</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="/"><FaFacebook /></a>
        <a href="/"><FiInstagram /></a>
        <a href="/"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nasyx Rakeeb - All Rights Reserved</small>
      </div>
    </footer>
    )
}

export default Footer
































