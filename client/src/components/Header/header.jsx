import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/welcome/logo.svg" alt="logo" />
        </div>
        <nav className="navigation">
          <ul className="nav-wrapper">
            <li className="nav">
              <img src="/assets/header/feed-dac.svg" alt="goFeed" />
            </li>
            <li className="nav">
              <img src="/assets/header/profile-dac.svg" alt="goProfile" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;