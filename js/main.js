$(function () {


  //header
  let slidDown2 = $('.header .inner .nav .gnb >li> .depth02_wrap');
  $('.header .nav .gnb li').mouseover(function(){
    $(slidDown2).stop().slideDown();
  });
  $('.header .nav .gnb li').mouseleave(function(){
    $(slidDown2).stop().slideUp();
  })

  $('.header .inner .util .lang').mouseover(function(){
    $('.header .inner .util .lang ul').stop().slideDown();
  });
  $('.header .inner .util .lang').mouseleave(function(){
    $('.header .inner .util .lang ul').stop().slideUp();
  })

  let header = document.querySelector('.header .inner');
  window.addEventListener('scroll',()=>{
    let scrollBar = window.scrollY;
    if(scrollBar>0){
      header.classList.add('active');
    }else {
      header.classList.remove('active');
    }
  });
  //swiper 1
  var swiper = new Swiper(".section1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

  //swiper slider2
  var swiper = new Swiper(".section2", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  //section02
  let listMenu = document.querySelectorAll('.section02 ul li');
  let listItem = document.querySelectorAll('.section02 .sec2_slide');
  for (let i = 0; i < listMenu.length; i++) {
   listMenu[i].addEventListener('click',()=>{
    listMenu.forEach (menu =>{
      menu.classList.remove('active');
    })
    listMenu[i].classList.add('active');
   listItem.forEach (menu =>{
    menu.classList.remove('active');
  });
  listItem[i].classList.add('active');
     });
  }
  //section03 swiper
  var swiper = new Swiper(".section3", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });
  //section04 swiper
  var swiper = new Swiper(".section4", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
  //section05 swiper
  var swiper = new Swiper(".section5", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
 

});
