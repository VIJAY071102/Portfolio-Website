import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Footer from "./Components/Footer/Footer.jsx"
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
