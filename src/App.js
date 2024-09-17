import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
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
      <h2>Home</h2>
      <p>Welcome to Gigi's Freezies!</p>
    </div>
  );
}

export default App;
