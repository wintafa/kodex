import React from 'react';
import './Pricemodal-fiz.css'; // подключаем стили

const Modalprice = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Если модал не открыт - ничего не возвращаем

  return (
    <div className="modal-overlay-price" onClick={onClose}>
      <div className="modal-price" onClick={onClose}>
    <div className="container price__inner">
      <div className="service-block top-block">
        <h3 className="block-title">Составление документов</h3>
        <table>
          <tbody>
            <tr>
              <td>Договор купли-продажи</td>
              <td>от 5 000 рублей</td>
            </tr>
            <tr>
              <td>Договор дарения</td>
              <td>от 5 000 рублей</td>
            </tr>
            <tr>
              <td>Судебный приказ</td>
              <td>от 5 000 рублей</td>
            </tr>
            <tr>
              <td>Отмена судебного приказа</td>
              <td>от 7 000 рублей</td>
            </tr>
            <tr>
              <td>Исковое заявление</td>
              <td>от 7 000 рублей</td>
            </tr>
            <tr>
              <td>Возражение на исковое заявление</td>
              <td>от 7 000 рублей</td>
            </tr>
            <tr>
              <td>Апелляционная жалоба</td>
              <td>от 10 000 рублей</td>
            </tr>
            <tr>
              <td>Возражение на апелляционную жалобу</td>
              <td>от 10 000 рублей</td>
            </tr>
            <tr>
              <td>Мировое соглашение</td>
              <td>от 10 000 рублей</td>
            </tr>
            <tr>
              <td>Кассационная жалоба</td>
              <td>от 10 000 рублей</td>
            </tr>
            <tr>
              <td>Возражение на кассационную жалобу</td>
              <td>от 10 000 рублей</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="service-separator"></div>

        <div className="price__helper">
          Представленные цены не являются офертой, а окончательная стоимость услуг определяется при заключении договора.
        </div>
      
    </div>
  </div>
      </div>
  );
};

export default Modalprice;
