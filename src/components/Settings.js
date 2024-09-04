import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Settings.css';

const Settings = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setLanguage(e.target.value);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <label htmlFor="language-select">Choose a language:</label>
          <select id="language-select" value={language} onChange={handleChange}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Settings;
