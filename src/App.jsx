import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MyWork from "./Components/MyWork/MyWork.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero id="home" />
        <Skills id="skills" />
        <MyWork id="work" />
        <Projects id="projects" />
        <ContactMe id="contact" />
      </div>
      <Footer />
    </>
  );
}

export default App;
