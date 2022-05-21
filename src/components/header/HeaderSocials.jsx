import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a rel="noreferrer" href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a rel="noreferrer" href="https://github.com" target="_blank"><FaGithub /></a>
     <a rel="noreferrer" href="https://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
    )
}

export default HeaderSocials