// DiplomaSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import Popup from './Popup'; // Импортируйте наш компонент Popup
import './Slider.css';

const diplomas = [
  {
    id: 1,
    title: "Диплом 1",
    description: "Описание диплома 1",
    image: "diplom1.jpg"
  },
  {
    id: 2,
    title: "Диплом 2",
    description: "Описание диплома 2",
    image: "diplom2.png"
  },
  {
    id: 3,
    title: "Диплом 3",
    description: "Описание диплома 3",
    image: "diplom3.jpg"
  },
  {
    id: 4,
    title: "Диплом 4",
    description: "Описание диплома 4",
    image: "diplom4.jpg"
  },
  {
    id: 5,
    title: "Диплом 5",
    description: "Описание диплома 5",
    image: "diplom5.jpg"
  },
  {
    id: 6,
    title: "Диплом 6",
    description: "Описание диплома 6",
    image: "diplom6.jpg"
  },
  {
    id: 7,
    title: "Диплом 7",
    description: "Описание диплома 7",
    image: "diplom7.jpg"
  },
];

const DiplomaSlider = () => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", zIndex: 999,}}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#D7AC8A" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
      </button>
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", zIndex: 999, }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" z-index='999' fill="#D7AC8A" className="bi bi-chevron-left" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
      </button>
    );
  };
  // const [selectedDiploma, setSelectedDiploma] = useState(null);

  // const handleClick = (diploma) => {
  //   setSelectedDiploma(diploma);
  // };

  // const closePopup = () => {
  //   setSelectedDiploma(null);
  // };

  const settings = {
    // dotsClass: 'slick-dots custom-dots',
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    arrows : false,
    // customPaging: (i) => {
    //   return (
    //     <div className="custom-dot">
    //       {/* Здесь вы можете заменить точку на черточку */}
    //       <span className="dash" />
    //     </div>
    //   );},
    nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="diplomi-content">
      <div className="diploma-slider">
        <div className="title_7">Сертификаты и дипломы</div>
        <Slider {...settings}>
          {diplomas.map((diploma) => (
            <div key={diploma.id} className="diploma-slide" >
              <img src={diploma.image} alt={diploma.title} />
            </div>
          ))}
        </Slider>
      </div>
      {/* <Popup diploma={selectedDiploma} onClose={closePopup}    onClick={() => handleClick(diploma)}/> */}
    </div>
  );
};

export default DiplomaSlider;
