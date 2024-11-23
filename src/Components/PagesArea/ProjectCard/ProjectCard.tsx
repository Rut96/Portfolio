import "./ProjectCard.css";
import { Github, Globe } from 'lucide-react';

type ProjectProps = {
    image: string;
    title: string;
    description: string;
    technologies?: string[];
    githubLink?: string;
    siteLink?: string;
}

export function ProjectCard(props: ProjectProps): JSX.Element {
    return (
        <div className="ProjectCard">
            <div className="card-front">
                <div className="card-image-container">
                    <img src={props.image} alt={props.title} />
                    <div className="image-overlay">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="card-content">
                    <h3>{props.title}</h3>
                    {props.technologies && (
                        <div className="tags">
                            {props.technologies.map((tech, index) => (
                                <span key={index} className="tag">{tech}</span>
                            ))}
                        </div>
                    )}
                    <div className="card-links">
                        {props.githubLink && (
                            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="link github-link">
                                <Github size={16} />
                                <span>Code</span>
                            </a>
                        )}
                        {props.siteLink && (
                            <a href={props.siteLink} target="_blank" rel="noopener noreferrer" className="link site-link">
                                <Globe size={16} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}