(function($) {

  // API INTERSECTION OBSERVER FOR SECTION FADE-IN
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting ) {
        $(entry.target).animate({opacity: 1},800);
      }
      else {
        $(entry.target).animate({opacity: 0}, 800);
    }
    });
  }, { threshold: 0.3});

document.querySelectorAll("section, article").forEach(section => { sectionObserver.observe(section) });

  // API INTERSECTION OBSERVER FOR TITLES SLIDE-UP
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).css('animation', 'title-slide-up 1500ms ease-in backwards');
      } else {
        $(entry.target).css('animation', '');
      }
    });
  }, { threshold: 0.3 });

  console.log("document.querySelectorAll('h2 > span, h3 > span') : ", document.querySelectorAll('h2 > span, h3 > span'))
  document.querySelectorAll("h2 > span, h3 > span").forEach(title => { titleObserver.observe(title) });


  
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

// Speed up flower rotation with scroll

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const rotationSpeed = 1 + scrollPos / 800; // Adjust the divisor to control the speed
  document.documentElement.style.setProperty('--flowers-rotation-speed', `${rotationSpeed}s`);
});

// Clouds animation that move with scroll

// Still needs tweaking to start the movement when the section is higher up on the screen
const clouds = document.querySelectorAll('.clouds');
const placeSection = document.querySelector('#place');
window.addEventListener('scroll', () => {
  const placeSectionRect = placeSection.getBoundingClientRect();
  if (placeSectionRect.top <= window.innerHeight && placeSectionRect.bottom >= 0) {
    clouds.forEach(cloud => {
      const cloudRect = cloud.getBoundingClientRect();
      const ratio = Math.max(0, (window.innerHeight - cloudRect.top) / cloudRect.height);
      const translate = -20.83 * ratio;
      if (ratio > 0 && ratio < 1) {
        cloud.style.setProperty('transform', 'translateX(' + translate + 'vw)');
      } else {
        cloud.style.setProperty('transform', 'translateX(0vw)');
      }
    });
  }
});
  
  })(jQuery);