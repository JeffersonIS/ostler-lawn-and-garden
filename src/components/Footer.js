import React from 'react';
import './Footer.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="/images/logo.png" 
            alt="Jefferson's Lawn Care Logo" 
            className="logo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;