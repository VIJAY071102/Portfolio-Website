import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav.jsx";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
// import logo1 from "../assets/images/logojsv.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((o) => !openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#work">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? (
                <i className="material-icons">close</i>
              ) : (
                <i className="material-icons">menu</i>
              )}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
