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

  $('.partners__list--right').slick({
  
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    cssEase: 'linear',
    speed: 3000,
    initialSlide: 1,
    draggable: false,
    rtl: true,

    responsive: [{
      breakpoint: 600,
      settings: {
          arrows: false,
          slidesToShow: 1
      }
  }]
    
  });
  $('.partners__list--left').slick({
   
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    cssEase: 'linear',
    speed: 3000,
    initialSlide: 1,
    draggable: false,
    // ltr: true,

    responsive: [{
      breakpoint: 600,
      settings: {
          arrows: false,
          slidesToShow: 1
      }
  }]
    
  });

  