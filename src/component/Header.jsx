import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/notepad">Note Pad</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
