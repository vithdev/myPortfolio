import UnicornScene from "unicornstudio-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="h2Xbj7F0JuUSVj4UANnZ"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
      />
      <div className="content">
        <h1 className="hero-title">Hi! I'm Devith</h1>
        <div className="buttn">
          <a href="#" className="cursor-target">Contact</a>
          <a href="#" className="cursor-target">Who i'm</a>
        </div>
      </div>
    </div>
  );
}