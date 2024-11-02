import React from 'react';
import './Modal.css'; // подключаем стили
import logo1 from './logo1.svg';
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Если модал не открыт - ничего не возвращаем

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <div className="logo-container">
            <img className='logo_4' src={logo1} alt='logo' />
            {/* <div className="logo"></></div> */}
            <div className="text-block">
              <div className="text-title_5">КодексЪ</div>
              <div className="text-subtitle">Юридическая компания</div>
            </div>
          </div>
          <div className="modal-header">Получить бесплатную консультацию</div>
          <p className="modal-description">
            Предоставим детальный анализ проблемы и экспертную юридическую консультацию у нас в офисе или в другом удобном формате.
          </p>
          <ul className="modal-list">
            <li>Бесплатная консультация</li>
            <li>Фиксированная стоимость</li>
            <li>Конфиденциальность</li>
          </ul>
        </div>
        <div className="modal-right">
          <h2 className="trust-text">Вы можете нам довериться</h2>
          <p className="privacy-policy_2">Политика конфиденциальности</p>
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" required className="form-input-modal" />
            <input type="tel" placeholder="Ваш телефон" required className="form-input-modal" />
            <button type="submit" className="submit-button">Получить бесплатную консультацию</button>
          </form>
          <p className="agreement-text">
            Я даю согласие на обработку персональных данных на условиях <span className='politika_1'>Политики конфиденциальности</span> в целях обработку заявки и обратном связи по ней.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
