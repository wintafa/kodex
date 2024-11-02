import React from "react";
import "./Forma.css"; // Подключаем CSS файл

const Forma = () => {
    return (
        <div className="salam">
        <div className="container_forma">
            <div className="header_forma">
                <title-form1>Доверьте списание долгов</title-form1>
                <br />
                <title-form2>опытным юристам</title-form2>
                <div><small className="privacy-policy"> Политика<br />конфиденциальности</small></div>
            </div>
            <div className="form-container-form">
                <input type="text-form" placeholder="Ваше имя" className="input-form" />
                <input type="tel_form" placeholder="Ваш телефон" className="input-form" />
                <button className="consultation-button-form">Получить бесплатную консультацию</button>
            </div>
        </div>
        </div>
    );
};

export default Forma;


