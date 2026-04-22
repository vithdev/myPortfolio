import "./Project.css";

import img1 from "../../assets/images/Cleveroad.png";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "Royal Wedding Attire Website",
    img: img1,
    desc: "Long-sleeved silk shirts with traditional Khmer patterns, often worn tucked in or out depending on the specific ceremony.",
    skills: ["HTML", "CSS", "Bootstrap"]
  },

  // {
  //   title: "Portfolio Website",
  //   img: img2,
  //   desc: "Personal portfolio to showcase my design and coding projects.",
  //   skills: ["HTML", "CSS", "Bootstrap"]
  // },

  // {
  //   title: "Weather App",
  //   img: img3,
  //   desc: "Responsive app showing real-time weather data using API integration.",
  //   skills: ["HTML", "CSS", "API"]
  // },

  // {
  //   title: "Blog Website",
  //   img: img4,
  //   desc: "Clean and simple blogging platform with markdown support.",
  //   skills: ["HTML", "Tailwind", "JavaScript"]
  // },

  // {
  //   title: "Game Landing Page",
  //   img: img5,
  //   desc: "Landing page for a game with animations and parallax effects.",
  //   skills: ["HTML", "CSS", "GSAP"]
  // },

  // {
  //   title: "Task Manager",
  //   img: img6,
  //   desc: "Task tracking web app with CRUD features and clean UI.",
  //   skills: ["HTML", "CSS", "JS"]
  // }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2 className="cursor-target">Project</h2>
      </div>

      <div className="projects-container cursor-target">

        {projects.map((project, index) => (

          <div className="project-card cursor-target" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" className="cursor-target" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns ">

              <a href="https://github.com/Devith-wanglin/bootstrap5" className="btn cursor-target">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="https://bootstrap5-pi.vercel.app/" className="btn cursor-target">
                <i className="fas fa-external-link-alt "></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}