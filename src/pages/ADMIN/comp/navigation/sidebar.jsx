import React, { useState } from 'react';
import '../../../../assets/css/navig.css';
import { Link } from 'react-router-dom';
function sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (event) => {
    event.preventDefault();

    // Handle item click logic here
    // For now, let's just console log the clicked item
    console.log('Clicked:', event.target.textContent);
  };

  return (
    <div className='XC'>
      <div className={`nav-bar ${menuOpen ? 'active' : ''}`}>
        <div id="menuToggle" className={`toggle-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className="main">
        <div className={`side-menu ${menuOpen ? 'resize' : ''}`}>
          <div className="mobile-search">
            <form className="search-form">
              <input autoComplete="off" className="search-input" placeholder="Search" type="search" />
              <button className="search-action" type="submit" value=""></button>
            </form>
          </div>

          <div className="menu-items">
            <a href="#" className="item" onClick={handleItemClick}>Dashboard</a>
            <a href="#" className="item" onClick={handleItemClick}>Courses</a>
            <a href="#" className="item" onClick={handleItemClick}>Colleges</a>
            <a href="#" className="item" onClick={handleItemClick}>Applications</a>
            <a href="#" className="item" onClick={handleItemClick}>Payment</a>
            <Link to ='/'><a  className="item">Logout</a></Link>
          </div>
        </div>

      </div>

     
    </div>
  );
}

export default sidebar;
