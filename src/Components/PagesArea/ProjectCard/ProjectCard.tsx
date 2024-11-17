import "./ProjectCard.css";
import { Github } from 'lucide-react';

type ProjectProps = {
    image: string;
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
}

export function ProjectCard(props: ProjectProps): JSX.Element {
    return (
        <div className="ProjectCard">
            <div className="card-front">
                <div className="card-image">
                    <img src={props.image} alt={props.title} />
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
                    {props.link && (
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="link">
                            <Github size={14} />
                            <span>Code</span>
                        </a>
                    )}
                </div>
            </div>
            <div className="card-back">
                <p>{props.description}</p>
            </div>
        </div>
    );
}
