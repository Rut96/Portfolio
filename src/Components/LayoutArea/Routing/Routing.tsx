import { Routes, Route } from "react-router-dom";
import { Home } from "../../PagesArea/Home/Home";
import { Skills } from "../../PagesArea/Skills/Skills";
import { Projects } from "../../PagesArea/Projects/Projects";
import { Education } from "../../PagesArea/Education/Education";
import { Contact } from "../../PagesArea/Contact/Contact";
import { ProjectDetails } from "../../PagesArea/ProjectDetails/ProjectDetails";
import "./Routing.css";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={
                    <>
                        <section id="home" className="section">
                            <div className="section-container">
                                <Home />
                            </div>
                        </section>

                        <section id="projects" className="section">
                            <div className="section-container">
                                <Projects />
                            </div>
                        </section>

                        <section id="skills" className="section">
                            <div className="section-container">
                                <Skills />
                            </div>
                        </section>

                        <section id="education" className="section">
                            <div className="section-container">
                                <Education />
                            </div>
                        </section>

                        <section id="contact" className="section">
                            <div className="section-container">
                                <Contact />
                            </div>
                        </section>
                    </>
                } />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </div>
    );
}