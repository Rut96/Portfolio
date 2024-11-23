import "./Menu.css";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

export function Menu(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
                <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
                <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
                <a href="#education" className="nav-link" onClick={toggleMenu}>Education</a>
                <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
            </nav>

            {isOpen && <div className="overlay" onClick={toggleMenu} />}
        </div>
    );
}