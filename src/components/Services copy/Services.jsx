import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Services.css'


import Modalprice from '../Price-modal-doc/Price-modal';
import { useState } from 'react';
import Modalpricedoc from '../Price-modal-sud/Price-modal-sud';


const CustomSlider = () => {
    const sliderRef = useRef(null);
    const sliderRef1 = useRef(null);

      // Состояния для отслеживания открытости модалей
  const [isPriceDocOpen, setPriceDocOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);

  // Функции для открытия и закрытия модалей
  const openPriceDoc = () => setPriceDocOpen(true);
  const closePriceDoc = () => setPriceDocOpen(false);

  const openPrice = () => setPriceOpen(true);
  const closePrice = () => setPriceOpen(false);
    const settings = {
        dots: true, // Убираем точки
        infinite: true,
        speed: 500,
        centerPadding: "100px",
        slidesToShow: 3,
        // slidesToScroll: 1,
        // appendDots: ('.appendDots'),
        arrows: false, // Отключаем стрелки

        // centerMode: true,
        // variableWidth: true,
        rows: 1,
    //     appendDots: dots => (
    //         <div
    //           style={{
    //             width:' 30px; ',
    // height: '10px;' ,
    // margin:'0 5px;',
    
   
    // opacity: '0.5;',
    // transition: 'opacity 0.3s;',
    //           }}
    //         >
    //           <ul style={{ margin: "0px" }}> {dots} </ul>
    //         </div>
    //       ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         width: "30px",
        //         color: "blue",
        //         border: "1px blue solid"
        //       }}
        //     >
        //       {i + 1}
        //     </div>
        //   ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                 rows: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
              }
            }
        ]
       
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="services-container" id='services'>
            <h1 className="services-title">Наши услуги</h1>
        <div className="services-row">
            <div className="fiz">
            
      
        <div className="services-info">
          <h1>Физическим лицам</h1>
          <ul>
            <li>Консультации по юридическим вопросам</li>
            <li>Представительство в суде</li>
            <li>Сопровождение сделок</li>
          </ul>
          </div>
          {/* Здесь добавьте стрелки для управления слайдером */}

          <div className="bottom-info-fiz">
          <div>
    
            {/* <button onClick={openPriceDoc}>Открыть модальное окно 1</button>
      <button onClick={openPrice}>Открыть модальное окно 2</button>
      <Modalpricedoc isOpen={isPriceDocOpen} onClose={closePriceDoc} />
      <Modalprice isOpen={isPriceOpen} onClose={closePrice} /> */}



      <div className='btn-codex'>
                      <button   className='consultation-button' onClick={() => openPriceDoc(true)}>Прайс-лист</button>
                     <Modalpricedoc isOpen={isPriceDocOpen} onClose={() => closePriceDoc(false)} />
                      </div>  
    </div>
          <div className="arrow-services">
  <button
    className='arrows-item'
    onClick={() => sliderRef.current.slickPrev()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1)" width="20" height="20" viewBox="0 0 24 24">
      <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
    </svg>
  </button>

  <button
    className='arrows-item'
    onClick={() => sliderRef.current.slickNext()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
    </svg>
  </button>
  </div>
</div>

</div>
        
        
        <div className="services-slider sli-oderne-slide" style={{slide: '10px'}}>
            <Slider {...settings} ref={sliderRef} >
            <div className='inner-item-services' id='slide'>
                    <h3>Семейное право</h3>
                        <h4>Предоставляем юридическую помощь в вопросах брака, развода, алиментов и раздела имущества.</h4></div>
            <div className='inner-item-services'>
                    <h3>Гражданское право</h3>
                        <h4>Консультируем и представляем интересы клиентов в вопросах договорных обязательств, защиты прав и законных интересов.</h4></div>
            <div className='inner-item-services'>
                    <h3>Банкротство</h3>
                        <h4>Оказываем услуги по банкротству физических лиц, включая судебные разбирательства и взаимодействие с кредиторами.</h4></div>
            <div className='inner-item-services'>
                    <h3>Земельное право</h3>
                        <h4>Помогаем в вопросах покупки, продажи и аренды земли, а также в решении споров, связанных с правами на землю.</h4></div>
            <div className='inner-item-services'>
                    <h3>Финансовое право</h3>
                    <h4>Консультируем по вопросам кредитования, финансовых споров и защиты прав потребителей в финансовой сфере.</h4></div>
            <div  className='inner-item-services'>
                    <h3>Жилищное право</h3>
                    <h4>Предоставляем помощь в вопросах аренды, купли-продажи недвижимости и разрешения жилищных споров.</h4></div>
    <div className='inner-item-services' >
                    <h3>Наследственное право</h3><h4>Консультируем по вопросам наследования, оформления завещаний и защиты прав наследников в спорах.</h4></div>
            
                    <div className='inner-item-services'>
                    <h3>Защита прав потребителей</h3>
                        <h4>Предлагаем услуги по защите прав потребителей, включая споры с продавцами и производителями товаров.</h4></div>
    <div className='inner-item-services'>
                    <h3>Автоюрист</h3>
                         <h4>Консультируем по вопросам ДТП, страховых выплат и защитим ваши интересы в судебных разбирательствах.</h4> </div>
            <div className='inner-item-services'>
                    <h3>Страховые споры</h3>
                        <h4>Помогаем в разрешении споров со страховыми компаниями, обеспечивая получение страховых выплат и защиту прав клиента.</h4> </div>
            </Slider>
            </div>
            
        
        
        </div>

        <div className="services-row-yur">


        <div className="services-slider item-yur-slider">
            <Slider {...settings} ref={sliderRef1} >
                <div className='inner-item-services'>
                    <h3>Арбитражные споры</h3>
                        <h4>Предоставляем консультации, разрабатываем стратегии и ведём весь арбитражный процесс. </h4></div>
                <div className='inner-item-services'>
                    <h3>Споры с государственными органами</h3>
                    <h4>Представляем интересы клиентов в конфликтных ситуациях с государственными учреждениями.</h4></div>
                <div className='inner-item-services'>
                    <h3>Услуги для бизнеса</h3>
                    <h4>Комплексная юридическая поддержка для компаний: регистрация, сопровождение договоров и защиты интеллектуальной собственности</h4></div>
                <div className='inner-item-services'>
                    <h3>Банкротство</h3>
                    <h4>Консультации и представительство в процедурах банкротства, помощь в защите прав кредиторов и должников</h4></div>
                </Slider>
            </div>
            
            <div className="yur item-yur-info">
      
        <div className="services-info-yur">
          <h1>Юридическим лицам</h1>
          <ul>
            <li>Консультации по юридическим вопросам</li>
            <li>Представительство в суде</li>
            <li>Сопровождение сделок</li>
          </ul>
          </div>
          {/* Здесь добавьте стрелки для управления слайдером */}
          <div className="bottom-info-yur">


          <div className="arrow-services-yur">
  <button
    className='arrows-item two'
    onClick={() => sliderRef1.current.slickPrev()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1)" width="20" height="20" viewBox="0 0 24 24">
      <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
    </svg>
  </button>

  <button
    className='arrows-item one'
    onClick={() => sliderRef1.current.slickNext()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
    </svg>
  </button>
  </div>
  <div className='btn-codex btn-yur'>
                      <button   className='consultation-button' onClick={() => setIsModalOpen(true)}>Прайс-лист</button>
                     <Modalprice isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                      </div>  
  
</div>

</div>
        
        
        
        
        
        </div>


        </div>
    );
};

export default CustomSlider;

    
   







 
// <div className="services-slider">
// <Slider {...settings} ref={sliderRef} >
//     <div className='service-item-two hvr-glow'><div className='inner-item-services'>
//         <h3>Семейное право</h3>
//             <h4>Предоставляем юридическую помощь в вопросах брака, развода, алиментов и раздела имущества.</h4></div></div>
//     <div className='service-item-two hvr-glow'><div className='inner-item-services'>
//         <h3>Гражданское право</h3>
//             <h4>Консультируем и представляем интересы клиентов в вопросах договорных обязательств, защиты прав и законных интересов.</h4></div></div>
//     <div className='service-item-two hvr-glow'><div className='inner-item-services'>
//         <h3>Банкротство</h3>
//             <h4>Оказываем услуги по банкротству физических лиц, включая судебные разбирательства и взаимодействие с кредиторами.</h4></div></div>
//     <div className='service-item-two'><div className='inner-item-services'>
//         <h3>Земельное право</h3>
//             <h4>Помогаем в вопросах покупки, продажи и аренды земли, а также в решении споров, связанных с правами на землю.</h4></div></div>
//     <div className='service-item-two'><div className='inner-item-services'>
//         <h3>Финансовое право</h3>
//         <h4>Консультируем по вопросам кредитования, финансовых споров и защиты прав потребителей в финансовой сфере.</h4></div></div>
//     <div className='service-item-two'><div  className='inner-item-services'>
//         <h3>Жилищное право</h3>
//         <h4>Предоставляем помощь в вопросах аренды, купли-продажи недвижимости и разрешения жилищных споров.</h4></div></div>
//     <div className='service-item-two'><div className='inner-item-services' >
//         <h3>Наследственное право</h3><h4>Консультируем по вопросам наследования, оформления завещаний и защиты прав наследников в спорах.</h4></div></div>
//     <div className='service-item-two'>
//         <div className='inner-item-services'>
//         <h3>Защита прав потребителей</h3>
//             <h4>Предлагаем услуги по защите прав потребителей, включая споры с продавцами и производителями товаров.</h4></div></div>
//     <div className='service-item-two'><div className='inner-item-services'>
//         <h3>Автоюрист</h3>
//              <h4>Консультируем по вопросам ДТП, страховых выплат и защитим ваши интересы в судебных разбирательствах.</h4> </div></div>
//     <div className='service-item-two'><div className='inner-item-services'>
//         <h3>Страховые споры</h3>
//             <h4>Помогаем в разрешении споров со страховыми компаниями, обеспечивая получение страховых выплат и защиту прав клиента.</h4> </div></div>
// </Slider>
// </div>
{/*  */}

