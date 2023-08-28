AOS.init();


$('.slick-slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  arrows:true,
  infinite:true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<span class="priv_arrow"><i class="fa-solid fa-angle-left fa-xl"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fa-solid fa-angle-right fa-xl"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


function scrollValue() {
  var navbar = document.getElementById('mynav');
  var scroll = window.scrollY;
  if (scroll < 400) {
      navbar.classList.remove('bg-color');
  } else {
      navbar.classList.add('bg-color');
  }
}

window.addEventListener('scroll', scrollValue);

