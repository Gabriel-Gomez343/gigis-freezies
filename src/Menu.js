import React, { useState } from 'react';
import './Menu.css';

const cremeIce = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Sample 1" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Sample 2" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Sample 3" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Sample 4" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Sample 5" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Sample 6" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Sample 7" }
];
const italianIce = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Sample 1" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Sample 2" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Sample 3" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Sample 4" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Sample 5" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Sample 6" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Sample 7" }
];
const gelatoFlavors = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Sample 1" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Sample 2" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Sample 3" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Sample 4" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Sample 5" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Sample 6" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Sample 7" }
];
const freezeDryCandy = [
  { src: '/imgs/Menu_Items/sample_1.jpg', name: "Sample 1" },
  { src: '/imgs/Menu_Items/sample_2.jpg', name: "Sample 2" },
  { src: '/imgs/Menu_Items/sample_3.jpg', name: "Sample 3" },
  { src: '/imgs/Menu_Items/sample_4.jpg', name: "Sample 4" },
  { src: '/imgs/Menu_Items/sample_5.jpg', name: "Sample 5" },
  { src: '/imgs/Menu_Items/sample_6.jpg', name: "Sample 6" },
  { src: '/imgs/Menu_Items/sample_7.jpg', name: "Sample 7" }
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