import React from 'react';
import './Footer.css';
import logoImg from '../images/logoblack.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src={logoImg} 
            alt="Jefferson's Lawn Care Logo" 
            className="logo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;