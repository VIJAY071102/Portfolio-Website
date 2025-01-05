import React from "react";
import "./MobileNav.css";

function MobileNav({ isOpen, toggleMenu }) {
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    toggleMenu(); // Close the mobile menu after clicking a link
    const targetId = e.target.getAttribute("href");
    const target = document.querySelector(targetId);
    
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Target element with ID ${targetId} not found`);
    }
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img className="logo" src="" alt="logo" />

        <ul>
          <li>
            <a href="#home" className="menu-item" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-item" onClick={handleLinkClick}>
              Skill
            </a>
          </li>
          <li>
            <a href="#work" className="menu-item" onClick={handleLinkClick}>
              Work Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-item" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-item" onClick={handleLinkClick}>
              Contact Me
            </a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
