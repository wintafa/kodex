import React from 'react';
import Slider from 'react-slick';
import './Reviews.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviewsData = [
  {
    name: "Иван Иванов",
    date: "12.03.2023",
    stars: 5,
    review: "Отличная юридическая помощь! Команда очень профессиональная.",
    image: "https://via.placeholder.com/100" // замените на реальную ссылку на изображение
  },
  {
    name: "Мария Петрова",
    date: "15.04.2023",
    stars: 5,
    review: "Благодаря этой компании я выиграл дело. Рекомендую!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Сергей Сергеев",
    date: "20.05.2023",
    stars: 5,
    review: "Команда юристов помогла разобраться в запутанной ситуации. Очень доволен!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Ольга Смирнова",
    date: "25.06.2023",
    stars: 5,
    review: "Я рада, что обратилась именно сюда. Они знают свою работу!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Иван Иванов",
    date: "12.03.2023",
    stars: 5,
    review: "Отличная юридическая помощь! Команда очень профессиональная.",
    image: "https://via.placeholder.com/100" // замените на реальную ссылку на изображение
  },
  {
    name: "Мария Петрова",
    date: "15.04.2023",
    stars: 5,
    review: "Благодаря этой компании я выиграл дело. Рекомендую!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Сергей Сергеев",
    date: "20.05.2023",
    stars: 5,
    review: "Команда юристов помогла разобраться в запутанной ситуации. Очень доволен!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Ольга Смирнова",
    date: "25.06.2023",
    stars: 5,
    review: "Я рада, что обратилась именно сюда. Они знают свою работу!",
    image: "https://via.placeholder.com/100"
  },
];

const settings = {
  

  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Для планшетов
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480, // Для мобильных устройств
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true // Скрыть стрелки на мобильных устройствах
      }
    }
  ]
};

const Reviews = () => {
  return ( <div className="hello">
    
    <div className="reviews-container">
      <div className="reviews-title">Наши отзывы</div>
      <Slider {...settings}>
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <img className="review-image" src={review.image} alt={review.name} />
            <div className="review-content">
              <div className="review-header">
                <span className="review-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-stars">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="20" height="20" fill="#D7AC8A">
                    <polygon points="10,1 12.09,7.36 19.18,7.36 13.54,11.64 15.64,18 10,13.88 4.36,18 6.46,11.64 0.82,7.36 7.91,7.36" />
                  </svg>
                ))}
              </div>
              <p className="review-text">{review.review}</p>
              <div className="review-footer">
                <span className="review-logo">Логотип</span>
                <span className="review-source">{index % 2 === 0 ? "2ГИС" : "Яндекс.Карты"}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="more-reviews">
        {/* <h2 className="more-reviews-title">Больше <br /> отзывов на:</h2> */}
        <div className="buttons-container">
          <button className="button-2gis">Больше отзывов на 2ГИС</button>
          <button className="button-yandex">Больше отзывов на Яндекс.карты</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
