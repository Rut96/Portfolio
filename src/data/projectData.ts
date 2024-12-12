import weatherIcon from '../Assets/Images/project1.png';
import cryptoTrackerImg from '../Assets/Images/cryptoTrackerImg.png';
import hireHeroImg from '../Assets/Images/hirehero.png';
import aiGeneratorImg from '../Assets/Images/aiGeneratorImg.png';
import rootColorIcon1 from '../Assets/Images/rootColorIcon1.png';
import rootColorIcon2 from '../Assets/Images/rootColorIcon2.png';
import simonGameImg from '../Assets/Images/simonGameImg.png';
import simonGameImg2 from '../Assets/Images/simonGameImg2.png';
import vacationImg1 from '../Assets/Images/v1.png';
import vacationImg2 from '../Assets/Images/v2.png';
import vacationImg3 from '../Assets/Images/v3.png';
import vacationImg4 from '../Assets/Images/v4.png';
import vacationImg5 from '../Assets/Images/v5.png';
import vacationImg6 from '../Assets/Images/v6.png';
import vacationImg7 from '../Assets/Images/v7.png';
import vacationImg8 from '../Assets/Images/v8.png';
import vacationImg9 from '../Assets/Images/v9.png';
import vacationImg10 from '../Assets/Images/v10.png';

export type Project = {
    id: string;
    title: string;
    images: string[];
    description: string[];
    technologies: string[];
    githubLink?: string;
    siteLink?: string;
}
export const projectsData: Project[] = [
    {
        id: "vacation-management",
        title: "Vacation Management System",
        images: [vacationImg1,vacationImg2,vacationImg3,vacationImg4,vacationImg5,vacationImg6,vacationImg7,vacationImg8,vacationImg9,vacationImg10], 
        description: [
            "Full-stack vacation management platform with role-based access and real-time interactions.",
            "Developed comprehensive admin dashboard for vacation package management with image upload capabilities.",
            "Implemented user features including likes system, dynamic filtering, and responsive pagination.",
            "Built secure authentication system with JWT tokens and MySQL database integration.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
            "Redux",
            "JWT",
            "Docker"
        ],
        // githubLink: "YOUR_GITHUB_LINK"
    },
    {
        id: "weather-app",
        title: "Weather App",
        images: [weatherIcon],
        description: [
            "Full-stack React application showcasing advanced weather visualization.",
            "Created responsive UI with dynamic weather animations and glass-morphic design.",
            "Implemented real-time data fetching, error handling, and 7-day forecasting.",
            "Built with React, TypeScript and Weather API integration."
        ],
        technologies: ["React", "TypeScript", "CSS", "Weather API Integration"],
        siteLink: "https://weather-rut.web.app/home",
        githubLink: "https://github.com/Rut96/react-weather-app"
    },
    {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        images: [cryptoTrackerImg],
        description: [
            "Interactive cryptocurrency tracking application with real-time price monitoring and advanced charting capabilities.",
            "Implemented responsive coin cards with flip animations and dynamic price updates using CoinGecko API.",
            "Built advanced candlestick charts with customizable timeframes using ApexCharts and CryptoCompare API.",
            "Created seamless UX with session-based caching, parallel API fetching, and smooth parallax scrolling effects."
        ],
        technologies: ["JavaScript", "jQuery", "ApexCharts", "CoinGecko API","CryptoCompare API","Parallax"],
        siteLink: "https://rut96.github.io/Root-the-coin/",
        githubLink: "https://github.com/Rut96/Root-the-coin"
    },
    {
        id: "hire-hero",
        title: "HireHero - Interview Preparation Assistant",
        images: [hireHeroImg],
        description: [
            "Full-stack Angular application providing personalized technical interview preparation.",
            "Implemented intelligent Q&A generation using GPT-4 API for custom interview scenarios.",
            "Created dynamic UI with smooth animations, expandable cards, and responsive design.",
            "Developed intuitive form controls for customizing interview difficulty and topics.",
            "Integrated real-time interview tips carousel with automated content generation."

        ],
        technologies: ["Angular", "TypeScript", "GPT-4 API Integration", "Responsive Design"],
        siteLink: "https://rut-hire-hero.web.app/home",
    },
    {
        id: "image-generator",
        title: "AI Image Generator",
        images: [aiGeneratorImg],
        description: [
            "Modern React application integrating DALL-E API for AI image generation with style controls.",
            "Developed modular component architecture with TypeScript for type safety and maintainability.",
            "Implemented state management using React Hooks and local storage for persistent image history.",
            "Created responsive UI with CSS Grid, Flexbox, and custom animations for enhanced user experience.",
            "Built prompt engineering service for optimized image generation results."

        ],
        technologies: ["React + TypeScript", "DALL-E API", "Local Storage", "Responsive Design"],
        siteLink: "https://rut-ai-image-generator.web.app/",
        githubLink: "https://github.com/Rut96/root-image"

    },
    {
        id: "color-root",
        title: "Extension Root Color Picker",
        images: [rootColorIcon1, rootColorIcon2],
        description: [
            "Chrome extension built with Plasmo framework for efficient color sampling from any webpage.",
            "Implemented modern React architecture with TypeScript for robust type safety and component reusability.",
            "Developed custom color format conversion system supporting HEX, RGB, and HSL with precise calculations.",
            "Created persistent storage system using Chrome Storage API for saving color history and user preferences.",
            "Designed intuitive UI with theme switching capability and custom SVG logo integration."

        ],
        technologies: ["React + TypeScript", "Plasmo Framework", "Chrome Extension API", "Chrome Storage"],
        githubLink: "https://github.com/Rut96/Color-Extension"
    },
    {
        id: "simon-says",
        title: "Simon Says Game",
        images: [simonGameImg,simonGameImg2],
        description: [
            "Interactive React game application implementing the classic Simon Says with modern design and progressive difficulty.",
            "Developed state management system using React Hooks for handling game sequences, scoring, and difficulty progression.",
            "Created immersive UI with glass-morphic effects, dynamic animations, and real-time visual feedback.",
            "Implemented modular service architecture with TypeScript for game logic, sound management, and error handling.",
            "Built responsive layout with custom CSS animations and SweetAlert2 integration for enhanced user experience."
        ],
        technologies: [
            "React + TypeScript",
            "Custom CSS Animations",
            "SweetAlert2",
            "Local Storage",
            "Sound Integration"
        ],
        siteLink: "https://root-says.web.app/",
        githubLink: "https://github.com/Rut96/simon-says/settings/pages"
    },

];
