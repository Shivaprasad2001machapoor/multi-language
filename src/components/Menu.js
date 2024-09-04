import React from 'react';
import './Menu.css';

const translations = {
  English: { home: 'Home', movies: 'Movies', tv: 'TV Shows', sports: 'Sports', live: 'Live' },
  French: { home: 'Accueil', movies: 'Films', tv: 'Émissions TV', sports: 'Sports', live: 'En direct' },
  German: { home: 'Startseite', movies: 'Filme', tv: 'TV Shows', sports: 'Sport', live: 'Live' },
  Russian: { home: 'Главная', movies: 'Фильмы', tv: 'ТВ-шоу', sports: 'Спорт', live: 'Прямой эфир' },
  Spanish: { home: 'Inicio', movies: 'Películas', tv: 'Programas de TV', sports: 'Deportes', live: 'En vivo' },
  Chinese: { home: '首页', movies: '电影', tv: '电视节目', sports: '体育', live: '直播' },
};

const Menu = ({ language, setSelectedMenu }) => {
  const labels = translations[language];

  const handleClick = (key) => {
    setSelectedMenu(key); // Update the selected menu item
  };

  return (
    <div className="menu-container">
      <div className="menu-bar">
        <ul className="menu-items">
          {Object.keys(labels).map(key => (
            <li 
              key={key} 
              className="menu-item" 
              onClick={() => handleClick(key)} // Handle click event
            >
              {labels[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;