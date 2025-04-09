import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-nav">
        <Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to='about' onClick={() => setIsMobileMenuOpen(false)}>About</Link>
      </div>
      
      <div className='logo'>
        <h4>Portfolio</h4>
      </div>
      
      <div className={`right-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <Link to='blogs' onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
        <a 
          href="https://github.com/AnuGartoula" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          GitHub
        </a>
      </div>
      
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;