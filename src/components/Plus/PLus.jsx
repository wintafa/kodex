import React from 'react';
import './Plus.css';
import  LikeIcon from './benefits_like_green.svg'; // Путь к вашему SVG
import  DislikeIcon from './benefits_like_red.svg'; // Путь к вашему SVG

const Plus = () => {
    return (
        <div className="container-grid">
            <div className="title-plus">
                <div className="title-custom">Почему стоит обратиться к нам?</div>
            </div>
            <div className="row-plus">
                <div className='ocenka like'>
                    <img src={LikeIcon} alt='like' className='grade' />
                    <div className="left-grid">
                        <div className="grid-item item-g_1">Всегда ответим на ваши вопросы, доступны 24 часа в сутки, честны и открыты перед своими доверителями.</div>
                        <div className="grid-item item-g_2">Сплоченный коллектив профессионалов, который регулярно повышает уровень своей квалификации не только в судебных процессах.</div>
                        <div className="grid-item item-g_3">Многосторонний подход к оценке обстоятельств каждого дела, вкупе с богатым опытом.</div>
                        <div className="grid-item item-g_4">Индивидуальный подход к каждому делу (клиенту), стараемся избегать шаблонов.</div>
                        <div className="grid-item item-g_5">Гибкая ценовая политика, все возможные способы оплаты, доступна оплата в рассрочку без банка и дополнительных процентов.</div>
                    </div>
                </div>
                <div className="ocenka dislike">
                    <img src={DislikeIcon} alt='dislike' className='grade' />
                    <div className="right-grid">
                        <div className="grid-item item-left1">Помните, что при проигранном иске повторное обращение в суд невозможно.</div>
                        <div className="grid-item item-left2">Недостоверная информация в поисковых источниках, и отсутствие опыта.</div>
                        <div className="grid-item item-left3">Потеря личного времени и финансов.</div>
                        <div className="grid-item item-left4">Большие временные затраты на поиск необходимой информации.</div>
                        <div className="grid-item item-left5">В случае неудачи Вы смиритесь, в то время как Мы будем работать дальше до достижения цели.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Plus;
