(function($) {

  // Make sections appear on scroll
  $(document).ready(function() {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('fade-in');
        } else {
          $(entry.target).removeClass('fade-in');
        }
      });
    }, { threshold: 0.4 });
  
    document.querySelectorAll("section, banner, .story, #characters, #place, .studio, #nomination, .site-footer").forEach(sectionSite => sectionObserver.observe(sectionSite));
  });

  // Make titles appear on scroll
  // This needs more work as some section titles are not being animated or are not being animated correctly
  const titlesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('title-anim');
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll("h2 span, h3 span, observed-item, studio__title, story__title, characters__title").forEach(sectionTitle => titlesObserver.observe(sectionTitle));

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
          loop: true,
          spaceBetween: 100,
          autoplay: true, 
          speed: 1000,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
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