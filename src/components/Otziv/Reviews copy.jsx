import React from 'react';
import './Reviews.css';
import { ReactComponent as Yandex } from './yandex.svg';
const reviewsData = [
  {
    name: "Иван Иванов",
    date: "12.03.2023",
    stars: 5,
    review: "Отличная юридическая помощь! Команда очень профессиональная.",
    image: "team_larisa.jpg" // замените на реальную ссылку на изображение
  },
  {
    name: "Мария Петрова",
    date: "15.04.2023",
    stars: 5,
    review: "Благодаря этой компании я выиграл дело. Рекомендую!",
    image: "team_larisa.jpg"
  },
  {
    name: "Сергей Сергеев",
    date: "20.05.2023",
    stars: 5,
    review: "Команда юристов помогла разобраться в запутанной ситуации. Очень доволен!",
    image: "team_larisa.jpg"
  },
  {
    name: "Ольга Смирнова",
    date: "25.06.2023",
    stars: 5,
    review: "Я рада, что обратилась именно сюда. Они знают свою работу!",
    image: "team_larisa.jpg"
  },
  {
    name: "Алексей Иванов",
    date: "25.06.2023",
    stars: 5,
    review: "Я рада, что обратилась именно сюда. Они знают свою работу!",
    image: "team_larisa.jpg"
  },
  {
    name: "Миша Беркут",
    date: "25.06.2023",
    stars: 5,
    review: "Я рада, что обратилась именно сюда. Они знают свою работу!",
    image: "team_larisa.jpg"
  },
];

const DiplomaSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }; 


const Reviews = () => {
  return ( <div className="hello">
    <div className="reviews-container">
      <h1 className="reviews-title">Наши отзывы</h1>
      <div className="reviews-list">
      <Slider {...settings}>
        {diplomas.map((review, index) => (
          <div key={diploma.id} className="diploma-slide">
            <img src={diploma.image} alt={diploma.title} />
            {/* <h3>{diploma.title}</h3>
            <p>{diploma.description}</p> */}
          </div>
        ))}
     



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

              <Yandex />
              <span className="review-source">{index % 2 === 0 ? "2ГИС" : "Яндекс.Карты"}</span>
              </div>
            </div>
          </div>
        ))}

</Slider>
      </div>
      <div className="more-reviews">
        <h2 className="more-reviews-title">Больше <br /> отзывов на:</h2>
        <div className="buttons-container">
          <button className="button-2gis">Больше отзывов на 2ГИС</button>
          <button className="button-yandex">Больше отзывов на Яндекс.Карты</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;



