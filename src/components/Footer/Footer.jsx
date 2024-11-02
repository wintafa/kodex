import React from 'react';
import './footer.css';
import telephone from './telephone.gif';
import telegram from './contacts__tg.svg'
import whatsapp from './contacts__whatsapp.svg'
import email from './contacts__email.svg'
import address from './contacts__addr.svg'
import time from './contacts__time.svg'
import logo1 from './logo1.svg';
import virlab from './virlab.png';

import { Bitrix24Form } from 'react-bitrix24-form';

const Footer = () => {
    return (
    <footer className='foot' id='contact'>
        <div className="row-foot">
            <div className="contacts-foot">
              <div className='first-foot' >
                 <div className="title-foot">Контакты</div>
                 <div className="phone-foot">
                    <img src={telephone} alt='telephone' />
                    <a style={{textDecoration: 'none'}}  className="number-phone-foot"href="tel:+79609309191" >+7 960 930 9191</a>
                 </div>
                 </div>
                <div className="social">
                    <a  class="contacts__item_btn" href="https://wa.me/79609309191"
            onclick="return ym(56680159,&#34;reachGoal&#34;,&#34;call_from_web&#34;),!0" role="button" target="_blank"
            rel="nofollow noopener noreferrer" title="Написать в Whatsapp"><div className="whatsapp"> <img src={whatsapp} className='whatsapp-logo' alt='what' /> <a href="https://wa.me/79609309191" alassName='whats-title'>Whatsapp</a> </div></a>
                    <a  href="https://telegram.me/yurist42_kodeks"
            onclick="return ym(56680159,&#34;reachGoal&#34;,&#34;call_from_web&#34;),!0" role="button" target="_blank"
            rel="nofollow noopener noreferrer" title="Написать в Telegram"><div className="telegram"> <img src={telegram}  className='telegram-logo' alt='what' /> <a href="https://telegram.me/yurist42_kodeks"className='telegram-title'>Telegram</a> </div> </a>
                </div>
                <div className="more-info">
                <a href="mailto:kodeks_yrist@mail.ru"><div className="info-item email"><img src={email} alt='email'/> <a  href="mailto:kodeks_yrist@mail.ru">kodeks_yrist@mail.ru</a></div> </a>
                 <a href="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=152276446844" target="_blank" rel="nofollow noopener noreferrer">   <div className="info-item email"><img src={address} alt='address'/> <a href='#s'>Кемерово, ул.Красная, 13</a></div></a>
                    <div className="info-item email"><img src={time} alt='time'/> <a href='#s'>Время работы офиса: Пн-Сб 9:00 до 20:00</a></div>

                </div>
                <div className="form-container-foot form-mobile">
                    <Bitrix24Form className='bitrix'
    src='https://cdn-ru.bitrix24.ru/b10715786/crm/form/loader_14.js'
    data="inline/14/23hh6g" 
/>  </div>
                <div className="company-footer">
                    <div className="codex-footer">
                        <div className='logoblock'><img src={logo1} alt="Logo-footer" />
                            <div className="text-block">
                                    <div className="text-title_4">КодексЪ</div>
                                    <div className="text-subtitle-5">Юридическая компания</div></div></div>
                            <div className="text-foot">Политика конфиденциальности</div>    
                    </div>
                    <a href="https://www.virlab42.ru/" target="_blank" rel="noopener noreferrer">
                    <div className="virlab" href='https://www.virlab42.ru/'>
                        <div className="virlab-logoblock">
                        <img src={virlab} alt="Logo" /> </div>
                    <div className="text-foot">Разработано virlab42.ru</div> 
                    </div> </a> </div> </div> 
                    

                    <div className="form-container-foot form-desktop">
                    <Bitrix24Form className='bitrix'
    src='https://cdn-ru.bitrix24.ru/b10715786/crm/form/loader_14.js'
    data="inline/14/23hh6g" 
/>  </div>
                   
         
            </div>
             
            
        
    </footer>
       
    )
}


export default Footer;


