import React, {useState} from 'react';

import Modal from './../Modal/Modal'
import './Kodex.css'; // импорт вашего CSS
import team from './team.jpg';
const Kodex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="custom-counter" id='about' >
            <div className="overlay"></div>
            <div className="container-custom">
                <div className="row-custom">
                    <div className="column-custom">
                    <div className="title-custom">Оказываем юридические услуги с 1997 года</div>
                        <img src={team} className='team-photo' alt='team' />  
                        
                        <div className="item-text">
                            Мы представляем интересы клиентов в судах общей юрисдикции,
                            а также арбитражных судах всех инстанций. Оказываем юридические услуги не только 
                            в Новосибирске, но и по всему <b>КУЗБАССУ</b>, как для <b>физических</b>, так и <b>юридических</b> лиц. 
                            </div>
                            <div className="item-text">

                            Один из основных наших принципов — это личная ответственность за результат своей работы. 
                            Ситуация любого клиента всегда тщательно прорабатывается с учётом всех возможных 
                            вариантов разрешения правового вопроса, наиболее целесообразные из них разъясняются 
                            и согласуются с доверителем. Мы честно и добросовестно выполняем свою работу, 
                            профессионально отстаиваем права и законные интересы наших доверителей.</div>
                        
                        
                        
                    </div>
                </div>
                <div className='btn-codex'>
                      <button   className='consultation-button' href='#home' >Консультация</button> />
                     
                      </div>  
            </div>
        </div>
    );
};

export default Kodex;
