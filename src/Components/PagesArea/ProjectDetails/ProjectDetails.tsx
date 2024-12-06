import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import './ProjectDetails.css';
import { projectsData } from '../../../data/projectData';

export function ProjectDetails(): JSX.Element {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    const project = projectsData.find(p => p.id === id);
    
    useEffect(() => {
        setCurrentImageIndex(0);
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <button className="back-button" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    Return to Projects
                </button>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <div className={`ProjectDetails ${isLoading ? 'loading' : ''}`}>
            <div className="details-container">
                <nav className="project-nav">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} />
                        Back to Projects
                    </button>
                </nav>

                <header className="project-header">
                    <h1>{project.title}</h1>
                    {(project.githubLink || project.siteLink) && (
                        <div className="project-links">
                            {project.githubLink && (
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="link github-link"
                                >
                                    <Github size={20} />
                                    View Code
                                </a>
                            )}
                            {project.siteLink && (
                                <a 
                                    href={project.siteLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="link site-link"
                                >
                                    <Globe size={20} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    )}
                </header>

                <div className="main-content">
                    <div className="image-gallery">
                        <div className="gallery-container">
                            <img 
                                key={currentImageIndex}
                                src={project.images[currentImageIndex]} 
                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                className="gallery-image"
                            />
                            {project.images.length > 1 && (
                                <>
                                    <button className="gallery-nav prev" onClick={prevImage}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button className="gallery-nav next" onClick={nextImage}>
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="gallery-indicators">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="description">
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="technologies">
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}