import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Amine Hamzaoui</p>

        <div className="social-icons">

          <a href="https://github.com/vithdev"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/yann-undefined-78b517405/"><FaLinkedin/></a>
          <a href="https://www.instagram.com/manyin0/?hl=en"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;