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
            <div className="logo">LOGO</div>
            
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