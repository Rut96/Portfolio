import { useNavigate } from 'react-router-dom';
import { Github, Globe } from 'lucide-react';
import './ProjectCard.css';

type ProjectCardProps = {
    id: string;
    image: string;
    title: string;
    technologies: string[];
    githubLink?: string;
    siteLink?: string;
}

export function ProjectCard({ id, image, title, technologies, githubLink, siteLink }: ProjectCardProps): JSX.Element {
    const navigate = useNavigate();
    const basePath = process.env.PUBLIC_URL || '/Portfolio';

    const handleClick = (e: React.MouseEvent) => {
        // Check if the click was on or inside a link
        const clickedElement = e.target as HTMLElement;
        const isLink = clickedElement.closest('a');
        
        if (!isLink) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            navigate(`${basePath}/project/${id}`);
        }
    };

    return (
        <div className="ProjectCard" onClick={handleClick}>
            <div className="card-image-container">
                <img src={image} alt={title} />
                <div className="image-overlay">
                    <span>View Project</span>
                </div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                {(githubLink || siteLink) && (
                    <div className="card-links">
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link github-link"
                            >
                                <Github size={16} />
                                <span>Code</span>
                            </a>
                        )}
                        {siteLink && (
                            <a 
                                href={siteLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link site-link"
                            >
                                <Globe size={16} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}