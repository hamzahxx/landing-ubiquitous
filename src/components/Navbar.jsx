import { useState } from "react";
import "./HamburgerButton.css";

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex p-4">
      <h1 className="pl-3 font-sans font-bold text-3xl">{name}</h1>
      <ul className={`nav-list md:top-0 ${isOpen ? "left-0 top-16" : ""}`}>
        <li onClick={()=> setIsOpen(false)} className="nav-item">Home</li>
        <li onClick={()=> setIsOpen(false)} className="nav-item">About</li>
        <li onClick={()=> setIsOpen(false)} className="nav-item">Projects</li>
        <li onClick={()=> setIsOpen(false)} className="nav-item">Contact</li>
        <li onClick={()=> setIsOpen(false)} className="nav-item">Resume</li>
      </ul>
      <button
        className={`mt-[2px] h-[100%] ml-auto md:hidden hamburger-menu ${isOpen ? "active" : "inactive"}`}
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
