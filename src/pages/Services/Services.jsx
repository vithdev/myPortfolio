import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container cursor-target">

        <div className="service-card cursor-target">
          <FaCode className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript</p>
        </div>

        <div className="service-card cursor-target">
          <FaPalette className="service-icon cursor-target"/>
          <h3>UI Design</h3>
          <p>Creating clean and modern user interfaces with focus on design and usability.</p>
        </div>

        <div className="service-card cursor-target">
          <FaLaptopCode className="service-icon"/>
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features and smooth performance.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;