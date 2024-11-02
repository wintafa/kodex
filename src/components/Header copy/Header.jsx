// import React, { useEffect, useState } from 'react';
// import './header.css';
// import logo1 from './logo1.svg';
// import Modal from './../Modal/Modal';
// import tel from './tel3.gif';

// const Header = () => {
//   const scrollToSection = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState('transparent');
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 50) {
//       setBackgroundColor('rgb(0, 0, 0, 0.8)');
//     } else {
//       setBackgroundColor('#0f0f0f');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="header" style={{ backgroundColor }}>
//       <div className="header-inner">
//         <div className="logo">
//           <img src={logo1} alt="Logo" />
//           <div className="text-block">
//             <div className="text-title_4">КодексЪ</div>
//             <div className="text-subtitle-5">Юридическая компания</div>
//           </div>
//         </div>
        
//         <div className="navbar">
//           <button className="menu-toggle" onClick={toggleMenu}>
//             {isMenuOpen ? 'Закрыть' : 'Меню'}
//           </button>
//           <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
//             <li><a href="#s">Главная</a></li>
//             <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>О нас</a></li>
//             <li><a href="#uslugi" onClick={(e) => scrollToSection(e, 'uslugi')}>Услуги</a></li>
//             <li><a href="#footer" onClick={(e) => scrollToSection(e, 'footer')}>Контакты</a></li>
//           </ul>
//         </div>

//         <div className='contact-header'>
//           <div className='contats'><img src={tel} alt='tel' /></div>
//           <div className='number-phone'>+7(999)-999-99-99</div>
//         </div>
        
//         <div>
//           <button className='consultation-button' onClick={() => setIsModalOpen(true)}>Консультация</button>
//           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



