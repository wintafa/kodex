// Popup.js
import React from 'react';
import './Popup.css'; // Создайте файл стилей для попапа

const Popup = ({ diploma, onClose }) => {
  if (!diploma) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{diploma.title}</h2>
        <img src={diploma.image} alt={diploma.title} />
        <p>{diploma.description}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Popup;
