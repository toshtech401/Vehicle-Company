import React, {useState} from 'react'
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">TechCorp</div>
        <div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="icon"></span>
        </button>
        </div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Header