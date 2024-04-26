(function($) {

  // Elements to recover
  //$('.hero-header').fadeOut(2000)

  // API INTERSECTION OBSERVER
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log("entry : ", entry)
      if (entry.isIntersecting ) {
        //$(entry.target).css('background-color', 'red')
        $(entry.target).animate({opacity: 1}, 2000);
      }
      else {
        //$(entry.target).css('background-color', 'blue')
        $(entry.target).animate({opacity: 0}, 2000);
    }
    });
  }, { threshold: 0.3});

  console.log("document.getElementsByTagName('section') : ", document.querySelector("section"))
document.querySelectorAll("section, article").forEach(section => { sectionObserver.observe(section) });
  
    // Parallax effect
    $(window).scroll(function () {
      $('.banner-container').css({'transform': 'translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
      $('.hero-header__logo').css({'transform': 'translate(-50%, -50%) translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
    });
  
  // Swiper slider
    $(document).ready(function() {
      var swiper;
    
      function initSwiper() {
        var swiperContainer = document.querySelector('.mySwiper');
        if (swiperContainer) {
          swiper = new Swiper('.mySwiper', {
            direction: "horizontal",
            loop: true,
            spaceBetween: 50,
            autoplay:  {
              delay: 5000,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          });
        }
      }
    
      // Initiates the swiper slider
      // We wrap the initSwiper function call inside a window load event listener
      // This ensures that the Swiper library is fully loaded before we try to use it
      window.addEventListener('load', function() {
        initSwiper();
      });
    
      $(window).resize(function() {
        if (swiper) {
          swiper.destroy(); // Destroy the swiper instance
          initSwiper(); // Re-initiate the swiper according to the width of the screen
        }
      });
    });
  
  })(jQuery);