import linkedin from "../../img/reseaux/linkedin-logo-white.webp"
import github from "../../img/reseaux/github-mark-white.webp"


import { useEffect, useState } from "react";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 60) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (
        <nav className={`navbar ${show && "nav__show"}`}>
            <h2 className="navbar__left-content">PortFolio</h2>
            <div className="navbar__middle-content">
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#Accueil">Accueil</a></li>
                    <li><a href="#About">À propos</a></li>
                    <li><a href="#Projects">Réalisations</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar__right-content">
                <div className={`menu-burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
                <div className="social-links">
                    <a
                        href="https://github.com/EmmaB21"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={github}
                            alt="github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emmanuelle-bertrand-278ab5267/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={linkedin}
                            alt="linkedin" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



