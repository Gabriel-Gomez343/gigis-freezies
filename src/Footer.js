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
          <p className="underline">Site Navigation:</p>
          <ul className="nav-links-footer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
          <br />
          <p className="underline">Location:</p>
          <p>2327 North Oxnard Blvd, <br />Oxnard CA 93036</p>
        </div>

        {/* Center Section: Hours */}
        <div className="center-section">
          <p className='underline'>Phone:</p>
          <p>805-403-6878</p>
          <br />
          <p className='underline'>Email:</p>
          <p>gigisice22@outlook.com</p>
          <br />
          <div className="hours-section">
            <p className="underline">Hours:</p>
            <p>Mon-Sat: 10 am - 9 pm</p>
            <p>Sun: 11 am - 7 pm</p>
          </div>
        </div>

        {/* Right Section: Social Links and Contact */}
        <div className="right-section">
          <div className="follow-us-row">
            <p className="underline">Follow us:</p>
            <a
              href="https://www.instagram.com/gigis.freezies"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={30} color="#E1306C" />
            </a>

          </div>
          <a href="/">
            <img src='imgs/logo_with_text.png' />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
