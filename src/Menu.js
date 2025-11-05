import React, { useState } from 'react';
import './Menu.css';

const cremeIce = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Almond Joy" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Banana" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Cappuccino" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Chocolate" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Chocolate Hazelnut" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Coconut" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Cookies & Cream" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Green Tea" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "KitKat" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Mexican Hot Chocolate" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Mint" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Orange Creamsicle" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Peanut Butter Cup" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Pistachio" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Salted Caramel" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Snickers" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Strawberry Cheesecake" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Strawberry Cream" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "S'More" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Vanilla Bean" }
];
const italianIce = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Black Cherry" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Blueberry" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Bubble Gum" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Cantaloupe" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Cherry" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Cotton Candy" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Grape" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Honey Dew" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Key Lime" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Lemon" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Mango" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Orange" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Passion Fruit" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Peach" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Pina Colada" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Pineapple" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Raspberry" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Sour Apple" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Strawberry" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Watermelon" }
];
const gelatoFlavors = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Almaretto" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Apple Pie" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Cherry Chip" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Cookies & Cream" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Dark Chocolate" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Expresso Chip" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Lemon Cookie" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Mascapone Biscotti" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Mint Chip" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Pistacho Strawberry" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Ricotta Honey" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Salted Caramel" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Stracciatello" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Toasted Coconut" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Vanilla Bean" }
];
const freezeDryCandy = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Assorted Taffy Neon Puffs" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Caramel Asteroid Puffs" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Celestial Hi Chewys" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Celestial Honey Bitz" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Charleys Skylab Chews" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Galactic Nerd Clusters" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Galactic Golly Bears" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Huckleberry Taffy Moon Puffs" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Jolly Cosmic Puffs" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Lunar Cosmic Puffs" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Lunar Fruit Rolls" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "MMMs Meteroids" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Peach Solar Rings" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Solar Skuttles" },
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Sour Solar Skuttles" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Stary Burts" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Watermelon Solar Rings" },
];

function MenuSection({ title, items }) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, 4);

  return (
    <div className="menu-container">
      <h2>{title}</h2>
      <div className="menu-grid">
        {visibleItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.src} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {items.length > 4 && (
        <button 
          className="toggle-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <MenuSection title="Cre'me Ice" items={cremeIce} />
      <MenuSection title="Italian Ice" items={italianIce} />
      <MenuSection title="Gelato Flavors" items={gelatoFlavors} />
      <MenuSection title="Freeze-Dried Candy" items={freezeDryCandy} />

    </div>
  );
}

export default Menu;