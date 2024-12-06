import { useEffect, useState } from 'react';
import { Menu } from "../Menu/Menu";
import { Routing } from '../Routing/Routing';
import "./Layout.css";

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
                <Routing />
            </main>
        </div>
    );
}