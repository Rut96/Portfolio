import { SkillCard } from "../SkillCard/SkillCard";
import "./Skills.css";
import htmlIcon from '../../../Assets/svg/html-icon.svg';
import cssIcon from '../../../Assets/svg/css-icon.svg';
import jsIcon from '../../../Assets/svg/js-icon.svg';
import javaIcon from '../../../Assets/svg/java-icon.svg';
import reactIcon from '../../../Assets/Images/react-icon.png';
import angularIcon from '../../../Assets/Images/angular-icon.png';
import mongoIcon from '../../../Assets/svg/mongo-icon.svg';
import sqlIcon from '../../../Assets/Images/sql.png';
import firebaseIcon from '../../../Assets/svg/firebase-icon.svg';
import gitIcon from '../../../Assets/svg/git-icon.svg';
import githubIcon from '../../../Assets/svg/github-icon.svg';
import ciscoIcon from '../../../Assets/svg/cisco-item.svg';
import tsIcon from '../../../Assets/Images/typescript.png';
import nodeIcon from '../../../Assets/Images/nodejs.png';
import expressIcon from '../../../Assets/Images/express.png';
import authIcon from '../../../Assets/Images/auth.png';
import apiIcon from '../../../Assets/Images/api.png';
import dockerIcon from '../../../Assets/Images/docker.png';

interface SkillCategory {
    title: string;
    skills: Array<{
        icon?: string;
        name: string;
    }>;
}

export function Skills(): JSX.Element {
    const skillCategories: SkillCategory[] = [
        {
            title: "Programming Languages",
            skills: [
                { icon: jsIcon, name: "JavaScript" },
                { icon: tsIcon, name: "TypeScript" },
                { icon: javaIcon, name: "Java" },
            ]
        },
        {
            title: "Frontend",
            skills: [
                { icon: htmlIcon, name: "HTML" },
                { icon: cssIcon, name: "CSS" },
                { icon: reactIcon, name: "React" },
                { icon: angularIcon, name: "Angular" },
                { name: "Responsive Design" },
                { icon: apiIcon, name: "REST API Integration" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { icon: nodeIcon, name: "Node.js" },
                { icon: expressIcon, name: "Express.js" },
                { icon: apiIcon, name: "RESTful API Design" },
                { icon: authIcon, name: "Authentication & Authorization" },
                { name: "Server-Side Architecture" },
            ]
        },
        {
            title: "Database",
            skills: [
                { icon: sqlIcon, name: "MySQL" },
                { icon: mongoIcon, name: "MongoDB" },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { icon: gitIcon, name: "Git" },
                { icon: githubIcon, name: "GitHub" },
                { icon: dockerIcon, name: "Docker" },
            ]
        },
        {
            title: "Additional Skills",
            skills: [
                { icon: firebaseIcon, name: "Firebase" },
                { icon: ciscoIcon, name: "CISCO" },
            ]
        }
    ];

    return (
        <div className="Skills" id="skills">
            <div className="skills-header">
                <div className="yellow-line"></div>
                <h2>Technical Skills</h2>
                <div className="yellow-line"></div>
            </div>

            <div className="skills-content">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <SkillCard
                                    key={skillIndex}
                                    image={skill.icon}
                                    title={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}