import React from 'react';
import './HeroBlock.css'; // Импортируем стили
import { Bitrix24Form } from 'react-bitrix24-form';
import pro from './pro2.jpg';
import BitrixForm from './Bitrix';
const HeroBlock = () => {
  return (
    <div className="hero-container" id='home'>
      <div className="left-section">
        <h1 className="title-hero">Юридические услуги в Кемерово</h1>
        <p className="description">
        Успешный опыт ведения арбитражных и гражданских дел
        более 27 лет для физических и юридических лиц
        </p>
        <div className='free-bitrix'><p className="description2">
        Оставьте заявку для  консультации
        </p>
        
        <Bitrix24Form className='bitrix'
    src='https://cdn-ru.bitrix24.ru/b10715786/crm/form/loader_14.js'
    data="inline/14/23hh6g" 
/></div>
        
        
        {/* <div className="form-container">
      <h2 className="form-title">Записаться к юристу</h2>
      <div className="form-inputs">
        <input type="text" placeholder="Имя" className="form-input" />
        <input type="tel" placeholder="Телефон" className="form-input" />
      </div>
      <textarea placeholder="Опишите проблему" className="form-textarea"></textarea>
      <button className="submit-button-hero">ОТПРАВИТЬ</button>
    </div> */}
      </div>
      {/* <div className="right-section">
        <img 
          src={pro}
          alt="Портрет" 
          className="portrait-image" 
        />
        <div className='who'>
          <p className='name'>Александр Прозоров, руководитель</p>
          <p className='opit'>Опыт более 27 лет</p>
        </div>
        
      </div> */}
    </div>
  );
};

export default HeroBlock;