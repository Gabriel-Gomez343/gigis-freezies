import React from 'react';
import ImageCarousel from './ImageCarousel';

const files=[
          '/imgs/menu/Assorted Taffy Noon Puffs.png',
          '/imgs/menu/Caramel Asteroid Puffs.png',
          '/imgs/menu/Celestial Hi Chewys.png',
          '/imgs/menu/Celestial Honey Bitz.png',
          '/imgs/menu/Charley Skylab Chews.png',
          '/imgs/menu/Galactic Nerd Clusters.png'
]

function Menu() {
  return (
    <div className='menu-container'
   // style={{
   //     backgroundImage: 'url(/imgs/gigi_banner_v03.png)',
   //     backgroundSize: 'cover',
   //     minHeight: '600vh',
   //     backgroundPosition: 'center center',
   // }}
    >
      <h2>Menu</h2>

      <ImageCarousel images={files}
          
           />
      
    </div>
  );
}

export default Menu;
