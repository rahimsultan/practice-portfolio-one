$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots:'.slider-dots',
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links")

  hamburger.addEventListener('click', () =>{
    links.classList.toggle('show');
  })