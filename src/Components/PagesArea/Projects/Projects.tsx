import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";
import defaultImg from '../../../Assets/Images/default-img.jpg';
import weatherAppImg from '../../../Assets/Images/project1.png';

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
                    // description ="Full-stack React application showcasing advanced weather visualization.
                    // Created responsive UI with dynamic weather animations and glass-morphic design. Implemented real-time data 
                    // fetching, error handling, and 7-day forecasting. Built with React, TypeScript and Weather 
                    // API integration. Feel free to check out the live demo or code on my GitHub."
                    technologies={["React", "TypeScript", "CSS", "Weather API Integration"]} />
                <ProjectCard image={defaultImg} title="Project 2" description={["Project description"]} />
                <ProjectCard image={defaultImg} title="Project 3" description={["Project description"]} />
            </div>
        </div>
    );
}


