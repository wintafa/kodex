import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="container-fluid legal-company">
      <div className="text-container">
        <h1>Как работает юридическая компания КодексЪ</h1>
        <p>
          Юридическая компания КодексЪ это профессиональная помощь квалифицированных юристов в решении любых задач.
          Наши юристы всегда готовы прийти на помощь с соблюдением вашей конфиденциальности.
        </p>
        <h2>Этапы работы</h2>
      </div>
      
      <div className="row">
        <div className="col-md-4 stage-container">
          <div className="stage stage-large">I. Консультация</div>
          <div className="stage">II. Сильная аналитика</div>
        </div>
        <div className="col-md-4 stage-container">
          <div className="stage">III. Выработка стратегии</div>
          <div className="stage stage-large">IV. Предпроектная подготовка</div>
        </div>
        <div className="col-md-4 stage-container">
          <div className="stage stage-large">V. Подготовка результата</div>
          <div className="stage">VI. Успешный результат</div>
        </div>
      </div>

      <div className="arrows">
        
      </div>
    </div>
  );
};

export default Work;
