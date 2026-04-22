import Header from "./components/Header"
import "./App.css" 
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Project from "./pages/Project/Project"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import TargetCursor from './components/TargetCursor'


function App() {
  return (
    <>
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