import { useEffect } from "react"
import Header from "./components/Header"
import "./App.css" 
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import TargetCursor from './components/TargetCursor'
import TouchRippleCursor from './components/TouchRippleCursor'

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      const links = document.querySelectorAll('a[href*="unicorn.studio"]');
      links.forEach(el => el.remove());

      const imgs = document.querySelectorAll('img[alt*="unicorn"]');
      imgs.forEach(el => el.closest('a')?.remove() || el.remove());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TouchRippleCursor />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      <Header />
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App