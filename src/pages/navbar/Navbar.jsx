import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import './TogglerClick.css';
import './TogglerCancel.css';

function Navbar() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <div className='navContainer'>
      <div className={`header ${isAsideOpen ? 'active' : ''}`}>
        <Link to="/Home" className="nav-link">
          <span className="roted">The</span>
          <span className="normal">SIREN</span>
        </Link>
      </div>
      {/* <hr className="nav-bottom-line" /> */}
      <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
        <div
          className={`nav-toggler ${isAsideOpen ? 'active' : ''}`}
          onClick={toggleAside}
        >
          <span></span>
        </div>
        <nav className="navbar" id="navbar">
          <div className="nav-container">
            <div className="navbarResponsive" id="navbarResponsive">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link">
                    <i className="fa fa-home"> Home</i>{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Bollywood">
                    <i className="fa fa-youtube-play"> Bollywood</i>{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">
                    <i className="fa fa-tv"> Technologys</i>{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Hollywood">
                    <i className="fa fa-youtube-play"> Hollywood</i>{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fitness">
                    <i className="fa fa-heartbeat"> Fitness</i>{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Food">
                    <i className="fa fa-cutlery"> Food</i>{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <hr className="nav-bottom-line" /> */}
    </div>
  );
}

export default Navbar;
