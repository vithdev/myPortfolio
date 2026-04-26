import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(prev => !prev)

    // Close menu when a link is clicked
    const handleLinkClick = () => setMenuOpen(false)

    return (
        <header className={`header${scrolled ? " scroll" : ""}`}>
            <div className="logo">
                <h1><span>De</span>Vith</h1>
            </div>

            {/* Hamburger button — mobile only */}
            <button
                className={`hamburger${menuOpen ? " open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`links${menuOpen ? " open" : ""}`}>
                <li><a href="#hero" onClick={handleLinkClick} className="cursor-target">Home</a></li>
                <li><a href="#about" onClick={handleLinkClick} className="cursor-target">About</a></li>
                <li><a href="#project" onClick={handleLinkClick} className="cursor-target">Project</a></li>
                <li><a href="#serv" onClick={handleLinkClick} className="cursor-target">Services</a></li>
                <li><a href="#contact" onClick={handleLinkClick} className="cursor-target">Contact</a></li>
            </ul>

            <ul className={`icons${menuOpen ? " open" : ""}`}>
                <li><a className="cursor-target" href="https://github.com/vithdev"><FontAwesomeIcon  icon={faGithub} /></a></li>
                <li><a className="cursor-target" href="https://www.instagram.com/manyin0/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a className="cursor-target" href="https://www.linkedin.com/in/yann-undefined-78b517405/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </header>
    )
}

export default Header