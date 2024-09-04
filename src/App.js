
import React, { useState } from 'react';
import Menu from './components/Menu';
import Settings from './components/Settings';
import './App.css';

const images = {
  home: 'https://i.ibb.co/zVTQ7ty/best-ott-platforms-1-2048x1162.jpg',
  movies: 'https://i.ibb.co/t4tq6zs/th.jpg',
  tv: 'https://i.ibb.co/VBw6Trv/download.jpg',
  sports: 'https://i.ibb.co/Xp8NzCh/OIP.jpg',
  live: 'https://i.ibb.co/WF6XHdG/OIP-1.jpg',
};

const App = () => {
  const [language, setLanguage] = useState('English'); // Default language
  const [selectedMenu, setSelectedMenu] = useState('home'); // Default selected menu

  return (
    <div className="app-container">
      <div className="menu-bar">
        <Menu 
          language={language} 
          setSelectedMenu={setSelectedMenu} // Pass down the function to update selected menu
        />
        <Settings language={language} setLanguage={setLanguage} />
      </div>
      <div className="image-display">
        <img src={images[selectedMenu]} alt={selectedMenu} className="selected-image" />
      </div>
    </div>
  );
};

export default App;
