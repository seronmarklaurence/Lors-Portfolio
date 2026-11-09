import "./Dashboardcss.css";
import { Hero } from "../../sections/Hero/Hero.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { Skills } from "../../sections/Skills/Skills.jsx";
import { Contact } from "../../sections/Contact/Contact.jsx";

export const Dashboard = () => {
  return (
    <main className="dashboard-container">
      <section id="about" className="about-container">
        <Hero />
      </section>

      <hr />

      <section id="skills" className="skills-container">
        <Skills />
      </section>
      <hr />
      <section id="projects" className="projects-container">
        <Projects />
      </section>
      <hr />

      <section id="contact" className="contact-container">
        <Contact />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </main>
  );
};
