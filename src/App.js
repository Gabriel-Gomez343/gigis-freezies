import React from 'react';
import './App.css';
import { FaInstagram } from 'react-icons/fa';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigi's Freezies</h1>
        <img 
        src={`${process.env.PUBLIC_URL}/imgs/gigi_banner_v03.png`}
        alt="Gigi's Freezies Banner"
        className='pdf-img'
        />
        
      </header>

      <Footer />
    </div>
  );
}

export default App;
