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

      <h2>Italian Ice</h2>
      <p>Lemon</p>
      <p>Key Lime</p>
      <p>Cherry</p>
      <p>Black Cherry</p>
      <p>Blueberry</p>
      <p>Raspberry</p>
      <p>Strawberry</p>
      <p>Orange</p>
      <p>Grape</p>
      <p>Mango</p>
      <p>Peach</p>
      <p>Passion Fruit</p>
      <p>Pina Coloda</p>
      <p>Pineapple</p>
      <p>Watermelon</p>
      <p>Cantelop</p>
      <p>Honey Dew</p>
      <p>Sour Apple</p>
      <p>Cotton Candy</p>
      <p>Bubble Gum</p>
      

      {/*<ImageCarousel images={files}
          
           />*/}
      
    </div>
  );
}

export default Menu;
