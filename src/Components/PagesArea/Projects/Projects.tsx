import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";
import defaultImg from '../../../Assets/Images/default-img.jpg';

export function Projects(): JSX.Element {
    return (
        <div className="Projects">
			 <div className="projects-header">
                <p className="yellow-line"></p>
                <h2>Projects</h2>
                <p className="yellow-line"></p>
            </div>
            <div className="projects-grid">
                <ProjectCard image={defaultImg} title="Project 1" description="A brief description of the project that might span multiple lines but will be truncated after three lines with an ellipsis." technologies={["React", "TypeScript", "CSS"]}/>
                <ProjectCard image={defaultImg} title="Project 2" description="Project description"/>
                <ProjectCard image={defaultImg} title="Project 3" description="Project description"/>
            </div>
        </div>
    );
}


