import "./header.css"
import CTA from "./CTA"
//import ME from "../../assets/me.png"
import ME from "../../assets/me2.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nasyx Rakeeb</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="error" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
    )
}

export default Header























