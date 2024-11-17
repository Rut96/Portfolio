import { useState } from 'react';
import "./Education.css";

interface EducationItem {
    school: string;
    period: string;
    description: string;
    skills: string[];
}

export function Education(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const educationData: EducationItem[] = [
        {
            school: "Handesaim Tel-Aviv",
            period: "October 2021 - December 2023",
            description: "Studied advanced software development and computer science fundamentals, focusing on practical programming skills and theoretical knowledge.",
            skills: ["Computer Science", "Software Development", "Algorithm Design", "Problem Solving"]
        },
        {
            school: "JohnBryce",
            period: "May 2024 - December 2024",
            description: "Full Stack Development program covering modern web technologies and industry best practices.",
            skills: ["Full Stack Development", "Modern Web Technologies", "Database Management", "API Development"]
        }
    ];

    return (
        <div className="Education">
            <div className="education-header">
                <div className="yellow-line"></div>
                <h2>Education</h2>
                <div className="yellow-line"></div>
            </div>

            <div className="education-timeline">
                {educationData.map((edu, index) => (
                    <div 
                        key={edu.school}
                        className={`education-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="education-card-content">
                            <div className="timeline-dot"></div>
                            <h3>{edu.school}</h3>
                            <p className="period">{edu.period}</p>
                            <p className="description">{edu.description}</p>
                            <div className="skills-container">
                                {edu.skills.map(skill => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
}