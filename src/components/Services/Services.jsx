
import './Services.css';


import Modalprice from '../Price-modal-doc/Price-modal';
import React, { useState } from 'react';
import Modalpricedoc from '../Price-modal-sud/Price-modal-sud';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    return ( <div className="aloha" id='uslugi'>
        <div className="service-container">
            {/* <h1 className="service-title">Услуги</h1> */}
            <div className="service-content">
                <div className="service-image">
                    <div className="service-flex-container">
                        <div className="service-flex-block">
                            <h2 className='title-service1'>Физическим лицам</h2>
                            <ul className='spisok'>
                                {['Семейное право', 'Гражданское право', 'Банкротство', 'Земельное право', 'Финансовое право', 'Жилищное право', 'Наследственное право', 'Защита прав потребителей', 'Автоюрист', 'Страховые споры'].map(item => (
                                    <li key={item}>
                                        <svg className="court-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,4h1v1H3V4 M6,4h1v1H6V4 M9,4h1v1H9V4 M12,4h1v1h-1V4 M15,4h1v1h-1V4 M18,4h1v1h-1V4 M21,4h1v1h-1V4 M12,2h-2C9,2,8.1,2.9,8.1,4H3c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-5.1c0-1.1-0.9-2-2-2h-2C12.9,0,12,0.9,12,2z M20,8H3v-2h17v2z M20,12H3v-2h17v2z M20,16H3v-2h17v2z M20,20H3v-2h17v2z" />
        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="service-flex-block">
                            <h2 className='title-service1'>Юридическим лицам</h2>
                            <ul className='spisok'>
                                {['Арбитражные споры', 'Споры с государственными органами', 'Услуги для бизнеса', 'Банкротство'].map(item => (
                                    <li key={item}>
                                        <svg className="court-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,4h1v1H3V4 M6,4h1v1H6V4 M9,4h1v1H9V4 M12,4h1v1h-1V4 M15,4h1v1h-1V4 M18,4h1v1h-1V4 M21,4h1v1h-1V4 M12,2h-2C9,2,8.1,2.9,8.1,4H3c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-5.1c0-1.1-0.9-2-2-2h-2C12.9,0,12,0.9,12,2z M20,8H3v-2h17v2z M20,12H3v-2h17v2z M20,16H3v-2h17v2z M20,20H3v-2h17v2z" />
        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className='btn-codex'>
                      <button   className='consultation-button' onClick={() => setIsModalOpen(true)}>Консультация</button>
                     <Modalprice isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                      </div>  
                      <div className='btn-codex'>
                      <button   className='consultation-button' onClick={() => setIsModalOpen(true)}>Консультация</button>
                     <Modalpricedoc isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                      </div>  

                    </div>
                    {/* <button className="price-button">Прайс-лист</button> */}
                </div>
                {/* <div className="service-contact">
                    <p>Напишите нам о вашей ситуации и мы предложим решение БЕСПЛАТНО в течение ЧАСА</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Имя" />
                        <input type="tel" placeholder="Телефон" />
                        <textarea placeholder="Описание проблемы"></textarea>
                        <button type="submit" className="form-button">Отправить</button>
                    </form>
                </div> */}
            </div>
        </div>
        </div>
    );
};

export default Services;
