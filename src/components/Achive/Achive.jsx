import React, { useEffect, useState } from 'react';

import './Achive.css';

const Achive = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);


    const animateCounter = (setValue, targetValue, duration) => {
        const start = performance.now(); // Получаем текущее время
        const animate = (currentTime) => {
            const elapsed = currentTime - start; // Вычисляем прошедшее время
            const progress = Math.min(elapsed / duration, 1); // Ограничиваем значение от 0 до 1
            setValue(Math.floor(progress * targetValue)); // Устанавливаем новое значение

            if (progress < 1) {
                requestAnimationFrame(animate); // Продолжаем анимацию, если не достигли финальной точки
            }
        };
        requestAnimationFrame(animate); // Запускаем анимацию
    };

    // Используем useEffect, чтобы запустить анимацию, когда компонент монтируется
    useEffect(() => {
        const duration = 2000; // Длительность анимации в миллисекундах
        
        animateCounter(setValue1, 27, duration); // Анимация для первого числа
        animateCounter(setValue2, 10173, duration); // Анимация для второго числа
        animateCounter(setValue3, 10000, duration); // Анимация для третьего числа
    }, []);


  return ( <div className="privet">
    <div className="counter-block">
      <div className="counter-container">
        <h3 className="word-achive ">Более</h3>
        <span className="counter ">{value1}</span>
        <p className="word-achive ">Лет работы</p>
      </div>
      <div className="counter-container">
        <h3 className="word-achive ">Более чем</h3>
        <span className="counter ">{value2}</span>
        <p className="word-achive ">Клиентов</p>
      </div>
      <div className="counter-container">
        <h3 className="word-achive ">Более чем</h3>
        <span className="counter ">{value3}</span>
        <p className="word-achive ">Успешных кейсов</p>
      </div>
    </div>

    </div>
  );
};

export default Achive;
