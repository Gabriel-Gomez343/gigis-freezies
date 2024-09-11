import React from 'react';
import { FaInstagram } from 'react-icons/fa';  // Instagram icon
import './Footer.css';  // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <p>Follow us:</p>
      <a 
        href="https://www.instagram.com/gigis.freezies" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaInstagram size={30} color="#E1306C" />
      </a>
    </footer>
  );
}

export default Footer;
