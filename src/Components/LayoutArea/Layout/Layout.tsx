import { useState, useEffect } from 'react';
import { Menu } from "../Menu/Menu";
import { Home } from "../../PagesArea/Home/Home";
import { Skills } from "../../PagesArea/Skills/Skills";
import { Projects } from "../../PagesArea/Projects/Projects";
import { Education } from "../../PagesArea/Education/Education";
import { Contact } from "../../PagesArea/Contact/Contact";
import "./Layout.css";
import { Routing } from '../Routing/Routing';

export function Layout(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Layout">
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <Menu />
            </header>

            <main className="main-content">
                {/* <section id="home" className="section">
                    <div className="section-container">
                        <Home />
                    </div>
                </section>

                <section id="skills" className="section">
                    <div className="section-container">
                        <Skills />
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="section-container">
                        <Projects />
                    </div>
                </section>

                <section id="education" className="section">
                    <div className="section-container">
                        <Education />
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="section-container">
                        <Contact />
                    </div>
                </section> */}

                <Routing />
            </main>
        </div>
    );
}