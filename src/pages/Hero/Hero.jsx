import UnicornScene from "unicornstudio-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="7C1jOcHWAvTwIEDwyppn"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
      />
      <div className="content">
        <h1 className="hero-title">Hi! I'm Devith</h1>
        <div className="buttn">
          <a href="#contact" className="cursor-target">Contact</a>
          <a href="#about" className="cursor-target">Who i'm</a>
        </div>
      </div>
    </div>
  );
}



