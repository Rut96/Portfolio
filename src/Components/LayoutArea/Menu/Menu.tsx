

import { Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            scrollToSection(sectionId);
        }
    }, [location]);

    function handleClick(event: React.MouseEvent) {
        const target = event.currentTarget as HTMLAnchorElement;
        const sectionId = target.hash.replace('#', '');
        scrollToSection(sectionId);
        setIsOpen(false);
    }

    return (
        <div className="Menu">
            <div className="logo">
                <NavLink 
                    to="/#home" 
                    onClick={handleClick}
                >
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
                </NavLink>
            </div>

            <button className="burger-button" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
                <NavLink 
                    to="/#home" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/#projects" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/#skills" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    Skills
                </NavLink>
                <NavLink 
                    to="/#education" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    Education
                </NavLink>
                <NavLink 
                    to="/#contact" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleClick}
                >
                    Contact
                </NavLink>
            </nav>

            {isOpen && <div className="overlay" onClick={toggleMenu} />}
        </div>
    );
}