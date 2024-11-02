import React from 'react';
import './Pricemodal.css';

const Modalpricedoc = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Если модал не открыт - ничего не возвращаем

  return (
    <div className="modal-overlay-price-sud" onClick={onClose}>
      <div className="modal-price-sud" onClick={onClose}>
    <div className="container price__inner-sud">
      
      <div className="service-block-sud bottom-block-sud">
      <div className="service-separator-sud"></div>
        <h3 className="block-title-sud">Судебное заседание</h3>
        <table>
          <tbody>
            <tr>
              <td>Мировой суд</td>
              <td>от 10 000 рублей</td>
            </tr>
            <tr>
              <td>Суд общей юрисдикции</td>
              <td>от 12 000 рублей</td>
            </tr>
            <tr>
              <td>Рассмотрение дела по существу</td>
              <td>от 15 000 рублей</td>
            </tr>
            <tr>
              <td>Апелляционный суд</td>
              <td>от 15 000 рублей</td>
            </tr>
            <tr>
              <td>Кассационный суд</td>
              <td>от 15 000 рублей</td>
            </tr>
          </tbody>
        </table>
        <div className="price__helper-sud">
          Представленные цены не являются офертой, а окончательная стоимость услуг определяется при заключении договора.
        </div>
      </div>
    </div>
  </div>
      </div>
  );
};

export default Modalpricedoc;
