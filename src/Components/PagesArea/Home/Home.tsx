import "./Home.css";
import IImg from "../../../Assets/Images/portfolio.png";
// import { useTitle } from "../../../Utils/UseTitle";
// import { useNavigate } from "react-router-dom";

export function Home(): JSX.Element {
    // useTitle("Van Rut Portfolio");
    // const navigate = useNavigate();

    // function toProjects() {
    //     navigate("#projects")
    // }

    return (
        <div className="Home">
                <div className="home-text">
                    <h1>Hi, I'm Rut Van Tinkelman</h1>
                    <p>Software Engineer & Full Stack Developer</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="cta-primary">View Projects</a>
                        <button className="cta-secondary">Contact Me</button>
                    </div>
                </div>

                <div className="image-container">
                    <div className="blob-container">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
                            <path fill="#FFC86A" d="M40.4,-41.2C56.4,-34.7,76.2,-25.8,80.8,-12.4C85.3,1,74.6,18.9,63.6,35.7C52.7,52.4,41.6,68,27.4,71.5C13.3,75,-3.9,66.3,-20,58.8C-36.1,51.2,-51.1,44.7,-58,33.3C-64.9,21.8,-63.6,5.4,-61.5,-11.6C-59.4,-28.7,-56.6,-46.3,-46.2,-53.8C-35.8,-61.3,-17.9,-58.5,-2.9,-55.1C12.2,-51.7,24.4,-47.6,40.4,-41.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <img src={IImg} alt="Rut Van" className="profile-image" />
                </div>
        </div>
    );
}
