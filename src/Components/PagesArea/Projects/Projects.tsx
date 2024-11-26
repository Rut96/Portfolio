import cryptoTrackerImg from '../../../Assets/Images/cryptoTrackerImg.png';
import weatherAppImg from '../../../Assets/Images/project1.png';
import hireHeroImg from '../../../Assets/Images/hirehero.png';
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <div className="projects-header">
                <p className="yellow-line"></p>
                <h2>Projects</h2>
                <p className="yellow-line"></p>
            </div>
            <div className="projects-grid">
                <ProjectCard
                    image={weatherAppImg}
                    siteLink="https://weather-rut.web.app/home"
                    githubLink="https://github.com/Rut96/react-weather-app"
                    title="Weather App"
                    description={[
                        "Full-stack React application showcasing advanced weather visualization.",
                        "Created responsive UI with dynamic weather animations and glass-morphic design.",
                        "Implemented real-time data fetching, error handling, and 7-day forecasting.",
                        "Built with React, TypeScript and Weather API integration."
                    ]}
                    technologies={["React", "TypeScript", "CSS", "Weather API Integration"]} />
                <ProjectCard
                    image={cryptoTrackerImg}
                    siteLink="https://rut96.github.io/Root-the-coin/"
                    githubLink="https://github.com/Rut96/Root-the-coin"
                    title="Crypto Tracker Pro"
                    description={[
                        "Interactive cryptocurrency tracking application with real-time price monitoring and advanced charting capabilities.",
                        "Implemented responsive coin cards with flip animations and dynamic price updates using CoinGecko API.",
                        "Built advanced candlestick charts with customizable timeframes using ApexCharts and CryptoCompare API.",
                        "Created seamless UX with session-based caching, parallel API fetching, and smooth parallax scrolling effects."
                    ]}
                    technologies={[
                        "JavaScript",
                        "jQuery",
                        "ApexCharts",
                        "CSS3",
                        "CoinGecko API",
                        "CryptoCompare API"
                    ]}
                />
                <ProjectCard
                    image={hireHeroImg}
                    siteLink="https://rut-hire-hero.web.app/home"
                    // githubLink="[Your GitHub repo URL]"
                    title="HireHero - Interview Preparation Assistant"
                    description={[
                        "Full-stack Angular application providing personalized technical interview preparation.",
                        "Implemented intelligent Q&A generation using GPT-4 API for custom interview scenarios.",
                        "Created dynamic UI with smooth animations, expandable cards, and responsive design.",
                        "Developed intuitive form controls for customizing interview difficulty and topics.",
                        "Integrated real-time interview tips carousel with automated content generation."
                    ]}
                    technologies={[
                        "Angular",
                        "TypeScript",
                        "GPT-4 API Integration",
                        "CSS Animations",
                        "Responsive Design"
                    ]} />
            </div>
        </div>
    );
}


