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
            <div className="" id="navbarResponsive">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link">
                     Home{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Bollywood">
                     Bollywood{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">
                     Technologys{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Hollywood">
                    Hollywood{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fitness">
                     Fitness{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Food">
                     Food{' '}
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
