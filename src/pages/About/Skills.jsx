import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaJava } from "react-icons/fa";
import { SiUnity, SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiMysql, SiPhp } from "react-icons/si";

const icons = [
  <FaHtml5 className="cursor-target"/>,
  <FaCss3Alt className="cursor-target"/>,
  <FaJs className="cursor-target"/>,
  <FaReact className="cursor-target"/>,
  <FaJava className="cursor-target"/>,
  <SiMysql className="cursor-target"/>,
  <SiPhp className="cursor-target"/>,
  <FaGitAlt className="cursor-target"/>,
  <FaGithub className="cursor-target"/>,
  <FaFigma className="cursor-target"/>,
  <SiTailwindcss className="cursor-target"/>,
];

function Skills() {
  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">
          {icons.map((icon, i) => <span key={i}>{icon}</span>)}
          {icons.map((icon, i) => <span key={`dup-${i}`} aria-hidden="true">{icon}</span>)}
        </div>
      </div>
    </div>
  );
}

export default Skills;