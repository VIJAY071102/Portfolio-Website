import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav.jsx";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
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
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Work Experiance
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
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

// import React, { useState } from "react";
// import MobileNav from "./MobileNav/MobileNav.jsx";
// import "./Navbar.css";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <>
//       {/* MobileNav Component */}
//       <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

//       {/* Navbar Component */}
//       <nav className="nav-wrapper">
//         <div className="nav-content">
//           <img className="logo" src="" alt="logo" />
//           <ul>
//             <li>
//               <a className="menu-item" href="">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="">
//                 Work Experience
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="">
//                 Contact Me
//               </a>
//             </li>
//             <button className="contact-btn" onClick={() => {}}>
//               Hire Me
//             </button>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="menu-btn" onClick={toggleMobileMenu}>
//             <span
//               className="material-symbols-outlined"
//               style={{ fontSize: "1.8rem" }}
//             >
//               {isMobileMenuOpen ? "close" : "menu"}
//             </span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
