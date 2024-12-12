import { Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === "/" || location.pathname === "";

    function toggleMenu() {
        setIsOpen(!isOpen);
    };

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    // Handle initial hash navigation
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.slice(1);
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    }, [location.hash]);


    function handleNavigation(sectionId: string, event: React.MouseEvent) {
        event.preventDefault();

        if (isMainPage) {
            scrollToSection(sectionId);
            navigate(`#${sectionId}`, { replace: true });
        } else {
            navigate(`/#${sectionId}`);
        }

        setIsOpen(false);
    };

    return (
        <div className="Menu">
            <div className="logo" onClick={(e) => handleNavigation('home', e)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="50"
                    height="50"
                >
                    <path
                        d="M20 50 L35 65 L45 30 L90 30"
                        fill="none"
                        stroke="#ffc86a"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M65 45 L65 70"
                        fill="none"
                        stroke="#ffc86a"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <button className="burger-button" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={(e) => handleNavigation('home', e)}>Home</a>
                <a href="#projects" className="nav-link" onClick={(e) => handleNavigation('projects', e)}>Projects</a>
                <a href="#skills" className="nav-link" onClick={(e) => handleNavigation('skills', e)}>Skills</a>
                <a href="#education" className="nav-link" onClick={(e) => handleNavigation('education', e)}>Education</a>
                <a href="#contact" className="nav-link" onClick={(e) => handleNavigation('contact', e)}>Contact</a>
            </nav>

            {isOpen && <div className="overlay" onClick={toggleMenu} />}
        </div>
    );
}