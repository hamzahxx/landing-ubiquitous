import { useState } from "react";

import "./HamburgerButton.css";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex p-4">
        <h1 className="navbar-header">{props.name}</h1>
        <ul className={isOpen ? "left-0 top-16 nav-list" : "nav-list"}>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Resume</li>
        </ul>
        <button
          className={`mt-[2px] ml-auto md:hidden hamburger-menu ${isOpen ? "active" : "inactive"}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>
    </>
  );
}

export default Navbar;
