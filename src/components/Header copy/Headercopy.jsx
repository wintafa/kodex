import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, NavbarText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo1 from './logo1.svg'
import cross1 from './cross3.svg';
import telegram from './contacts__tg.svg';
import whatsapp from './contacts__whatsapp.svg';
import vkfooter from './footer__vk.svg'
import tgfooter from './footer__tg.svg'
import whatsfooter from './footer__whatsapp2.svg'
import tel from './tel3.gif'

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" expand="lg" fixed="top" className="header">
      <div className="container">
        <Navbar.Brand href="#home" className="logo"><div className="logo">
          <img src={logo1} alt="Logo" />
          <div className="text-block">
            <div className="text-title_4">КодексЪ</div>
            <div className="text-subtitle-5">Юридическая компания</div>
          </div>
        </div></Navbar.Brand>
        <Navbar.Toggle className="d-lg-none" aria-controls="basic-navbar-nav" onClick={handleShow} />
      
        
		 <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block d-xl-block ml-auto navbar-coll" >
         
            <a className='navbar-item' href="#home">Главная</a>
            <a className='navbar-item' href="#about">О нас</a>
            <a className='navbar-item' href="#services">Услуги</a>
            <a className='navbar-item' href="#contact">Контакты</a>
            
            
            {/* <Button className="consultation-button">Консультация</Button> */}
          
        </Navbar.Collapse>

        <NavbarText className='navbartext d-none d-lg-block d-xl-block ml-auto'>
        <div className="phone-foot">
                    <img src={tel} alt='telephone' />
                    <a style={{textDecoration: 'none'}}  className="number-phone-foot number-phone-header"href="tel:+79609309191" >+7 960 930 9191</a>
                 </div>
                 <div className="social social-header">
                    <a  class="contacts__item_btn social-header-item" href="https://wa.me/79609309191"
            onclick="return ym(56680159,&#34;reachGoal&#34;,&#34;call_from_web&#34;),!0" role="button" target="_blank"
            rel="nofollow noopener noreferrer" title="Написать в Whatsapp"><div className="whatsapp"> <img src={whatsapp} className='whatsapp-logo' alt='what' /> <a href="https://wa.me/79609309191" alassName='whats-title'>Whatsapp</a> </div></a>
                    <a  href="https://telegram.me/yurist42_kodeks"
            onclick="return ym(56680159,&#34;reachGoal&#34;,&#34;call_from_web&#34;),!0" role="button" target="_blank"
            rel="nofollow noopener noreferrer" title="Написать в Telegram"><div className="telegram"> <img src={telegram}  className='telegram-logo' alt='what' /> <a href="https://telegram.me/yurist42_kodeks"className='telegram-title'>Telegram</a> </div> </a>
                </div>
        </NavbarText>
        <Offcanvas show={show} onHide={handleClose} placement="start" className="offcanvas">
          <Offcanvas.Header  >
          
          <div  onClick={toggleOffcanvas} className='burger__btn burger__btn_open' style= {{}}>
              <img src={cross1} alt='Close'/>
              
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className='offcanvas-head'>
          
          <Offcanvas.Title className='logo logo-side' style={{paddgin: '5px', width: '50px', display: 'flex'}}><img src={logo1} alt="Logo" />
          <div className="text-block textblock-side" >
            <div className="text-title_4"  >КодексЪ</div>
            <div className="text-subtitle-5" style={{fontsize: '14px'}}>Юридическая компания</div>
          </div></Offcanvas.Title>
            <Nav.Link  href="#home" className='main-sidebar side-item' >Главная</Nav.Link>
            <Nav.Link href="#about" className='main-about side-item'>О нас</Nav.Link>
            <Nav.Link href="#services" className='main-services side-item'>Услуги</Nav.Link>
            <Nav.Link href="#contact" className='main-contact side-item'>Контакты</Nav.Link>
            <a style={{textDecoration: 'none', fontSize: '22px', fontWeight: 'bold'}}  className="number-phone-foot"href="tel:+79609309191" >+7 960 930-91-91</a>
            {/* <Button className="consultation-button">Консультация</Button> */}

          <div className='sidebar-footer social'> 
          
          <a style={{color: '#D7AC8A;'}} href="https://vk.com/kodeks42" rel="nofollow noopener noreferrer"
              target="_blank">
              <img src={vkfooter} alt='social'/>
            </a>
            <a style={{color: '#D7AC8A;'}} href="https://wa.me/79609309191" rel="nofollow noopener noreferrer" 
              target="_blank">
              <img src={whatsfooter} alt='social'/>
            </a>
            <a style={{color: '#D7AC8A;'}} href="https://telegram.me/yurist42_kodeks" rel="nofollow noopener noreferrer" 
              target="_blank">
              <img src={tgfooter} alt='social'/>
            </a>
          </div>
            {/* <span className="phone-number">+7 (000) 000-00-00</span> */}
            {/* <Button variant="primary" className="consultation-button" onClick={handleClose}>Консультация</Button> */}
          </Offcanvas.Body>
          {/* <Offcanvas.Footer>

          </Offcanvas.Footer> */}
        </Offcanvas>
      </div>
    </Navbar>
  );
}

export default Header;
