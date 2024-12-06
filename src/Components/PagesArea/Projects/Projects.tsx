import { projectsData } from '../../../data/projectData';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './Projects.css';

export function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <div className="projects-header">
                <p className="yellow-line"></p>
                <h2>Projects</h2>
                <p className="yellow-line"></p>
            </div>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        image={project.images[0]}
                        title={project.title}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        siteLink={project.siteLink}
                    />
                ))}
            </div>
        </div>
    );
}