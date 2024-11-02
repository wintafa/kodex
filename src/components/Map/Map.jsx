import React from 'react';
import './Map.css'; // импортируем CSS файл

const Map = () => {
  return (
    <div className="map-widget">
      <a href="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=231127400859" className="map-link title">
        КодексЪ
      </a>
      <a href="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=231127400859" className="map-link subtitle">
        Юридические услуги в Кемерове
      </a>
      <a href="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=231127400859" className="map-link agency">
        Агентство недвижимости в Кемерове
      </a>
      <iframe 
        src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=231127400859" 
        
        frameBorder="1" 
        allowFullScreen 
        className="map-iframe">
      </iframe>
    </div>
  );
};

export default Map;
