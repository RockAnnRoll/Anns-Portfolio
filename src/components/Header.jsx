import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

function Header() {
  return (
    <div className="all-header">
      <div className="upper-header">
        <ToggleButton />
      </div>
      <header className="header">
        <div className="top-container">
          <h1>Anns portfolio</h1>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">Om mig</Link>
            <Link to="/projects">Projekt</Link>
            <Link to="/contact">Contakt</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
