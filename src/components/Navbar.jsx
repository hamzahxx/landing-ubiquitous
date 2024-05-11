import { useState } from "react";
import "./HamburgerButton.css";

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex p-4">
      <h1 className="navbar-header">{name}</h1>
      <ul className={`nav-list md:top-0 ${isOpen ? "left-0 top-16" : ""}`}>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Resume</li>
      </ul>
      <button
        className={`mt-[2px] ml-auto md:hidden hamburger-menu ${isOpen ? "active" : "inactive"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
    </div>
  );
}

export default Navbar;
