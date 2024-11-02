import './Road.css';
import React from 'react';

const Road = () => {
    return (
        <div className="hero-section">
      <div className="content">
        <h1>Как работает юридическая компания КодексЪ</h1>
        <p>Юридическая компания КодексЪ это профессиональная помощь квалифицированных юристов в решении любых задач.</p>
        <p>Наши юристы всегда готовы прийти на помощь с соблюдением вашей конфиденциальности.</p>
        <h2>Этапы работы</h2>
        <div className="roadmap">
          <div className="roadmap-line">
            <div className="step">II. Сильная аналитика</div>
            <div className="step">III. Выработка стратегии</div>
            <div className="step">IV. Предпроектная подготовка</div>
            <div className="step">V. Подготовка результата</div>
            <div className="step">VI. Успешный результат</div>
          </div>
          <div className="roadmap-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Road;
