import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import ImageCarousel from './ImageCarousel';

const files=['/imgs/fwdfwphotos/20230928_113429.jpg',
          '/imgs/fwdfwphotos/20230928_113634.jpg',
          '/imgs/fwdfwphotos/20230929_153039.jpg',
          '/imgs/fwdfwphotos/20230928_113301.jpg',
          '/imgs/fwdfwphotos/1000005344.jpg',
          '/imgs/fwdfwphotos/20230928_113206.jpg'];

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href="/">
            <img src='imgs/logo_without_text.png' />
          </a>
          <div className="header-title">
            <h1>Gigi's Freezies</h1>
          </div>
          {/* Add links to other pages */}
          <nav>
            <ul className='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        {/* Add routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="welcome-box">
        Best Freeze Dried Candy and Italian Ice in town!
      </div>
      <div className='carousel-section'>
        <div className='carousel'>
          <ImageCarousel images={files}    
           />
        </div>
        <div className='carousel-text'>
          <p>
            Try our wide selection of delicious freeze-dried
            <br />
            candy and Italian ice
            at Gigi's Freezies!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
