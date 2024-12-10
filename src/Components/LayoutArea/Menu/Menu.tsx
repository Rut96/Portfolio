import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isMainPage = location.pathname === '/Portfolio' || location.pathname === '/Portfolio/';
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (sectionId: string, event: React.MouseEvent) => {
        event.preventDefault(); 
        
        if (isMainPage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = '/Portfolio#' + sectionId;
        }
        setIsOpen(false);
    };
    
    return (
        <div className="Menu">
            <div className="logo">
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