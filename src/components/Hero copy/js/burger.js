const burgerBtn=document.querySelector(".burger__btn"),body=document.querySelector(".body"),headerMenu=document.querySelector(".header__menu");burgerBtn.addEventListener("click",()=>{burgerBtn.classList.toggle("burger__btn_open"),headerMenu.classList.toggle("header__menu_open"),body.classList.toggle("no_scroll")});