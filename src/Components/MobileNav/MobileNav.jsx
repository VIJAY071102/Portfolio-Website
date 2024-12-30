import React from "react";
import "./MobileNav.css";
function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="" alt="logo" />

          <ul>
            <li>
              <a href="" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Skill
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                contact me{" "}
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;

// import React from "react";
// import "./MobileNav.css";

// function MobileNav({ isOpen, toggleMenu }) {
//   return (
//     <div
//       className={`mobile-menu ${isOpen ? "active" : ""}`}
//       onClick={toggleMenu} // Close menu when clicking outside.
//     >
//       <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
//         <img className="logo" src="" alt="logo" />
//         <ul>
//           <li>
//             <a href="" className="menu-item">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="" className="menu-item">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="" className="menu-item">
//               Work Experience
//             </a>
//           </li>
//           <li>
//             <a href="" className="menu-item">
//               Contact Me
//             </a>
//           </li>
//           <button className="contact-btn" onClick={() => {}}>
//             Hire Me
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default MobileNav;
