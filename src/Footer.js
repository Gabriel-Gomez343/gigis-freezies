import React from 'react';
import { FaInstagram } from 'react-icons/fa';  // Instagram icon
import './Footer.css';  // Import CSS for styling
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        
        {/* Left Section: Navigation Links */}
        <div className="left-section">
          <ul className="nav-links-footer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Center Section: Social Links and Contact */}
        <div className="center-section">
          <p>Follow us:</p>
          <a 
            href="https://www.instagram.com/gigis.freezies" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram size={30} color="#E1306C" />
          </a>
          <p>Phone: TBD</p>
          <p>Email: jackie@gigisfreezies.com</p>
        </div>

        {/* Right Section: Hours */}
        <div className="right-section">
          <div className="hours-section">
            <p>Hours:</p>
            <p>Mon-Fri: TBD</p>
            <p>Sat-Sun: TBD</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
