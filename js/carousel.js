$('.seasons__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
  
  $('.happy__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
  