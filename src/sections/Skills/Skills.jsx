import "./Skillscss.css";
import { HrDot } from "../../components/HrDot/HrDot";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { LuFolderUp } from "react-icons/lu";

const skillCategories = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript color="#F7DF1E" />,
        info: "ES6+ • Async • DOM",
      },
      {
        name: "React",
        icon: <FaReact color="#61DAFB" />,
        info: "Hooks • Router",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 color="#E34F26" />,
        info: "Semantic Tags • SEO Basics",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt color="#1572B6" />,
        info: "Flexbox • Grid • Animations",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: <SiPhp color="#777BB4" />,
        info: "OOP • Form Handling • MVC Logic",
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479A1" />,
        info: "Queries • CRUD • Optimizations",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "GitHub",
        icon: <FaGithub />,
        info: "Version Control • Branching",
      },
      {
        name: "XAMPP",
        icon: <FaServer color="#FB7A24" />,
        info: "Local Dev Environment",
      },
      {
        name: "FileZilla",
        icon: <LuFolderUp color="#BF2A2A" />,
        info: "FTP/SFTP • Deployment",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="skills-outer-wrapper">
    <div className="skills-wrapper">
      <div className="skills-header">
       
        <p className="skills-body">
          Technologies i worked with to build modern and scalable applications
        </p>
      </div>
      {skillCategories.map((item, index) => {
        const uniqueKey = index + item.category;

        return (
          <div key={uniqueKey} className="stack-container">
            <div className="stack-header">
              <HrDot
                textContent={item.category.toUpperCase()}
                fontSize="1rem"
              />
            </div>
            <div className="teckstack-container">
              {item.items.map((skills, index) => {
                const uniqueKey = index + skills.name;
                return (
                  <div key={uniqueKey} className="techstack">
                    {skills.icon}
                    <div>
                      {skills.name}
                      <p className="skills-info">{skills.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};
