import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';

function Header() {
  return (
    <div className='AllHeader'>
    <div className='UpperHeader'>
      <ToggleButton />
      </div>
    <header className="header">
     
      <div className="top-container">
        <h1>Anns portfolio</h1>
        
      </div>
      <nav className="nav">
  <div className="nav-links">
    <Link to="/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>
    </header>
    </div>
  );
}

export default Header;