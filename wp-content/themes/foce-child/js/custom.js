(function($) {

  const bannerVideo = document.querySelector('#bg-video');
  const fallbackImage = document.querySelector('#fallback-image');

  function updateBanner() {
    if (window.matchMedia('(max-width: 700px)').matches || bannerVideo.error) {
      bannerVideo.style.display = 'none';
      fallbackImage.style.display = 'block';
    } else {
      bannerVideo.style.display = 'block';
      fallbackImage.style.display = 'none';
    }
  }

  window.addEventListener('resize', updateBanner);
  bannerVideo.addEventListener('error', updateBanner);
  bannerVideo.addEventListener('canplay', updateBanner);

  updateBanner();

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
const windowHeight = window.innerHeight;
const clouds = document.querySelector('.clouds');

window.addEventListener('scroll', () => {
  const cloudsRect = clouds.getBoundingClientRect();
  const ratio = (windowHeight - cloudsRect.y) / windowHeight;
  const translate = -20.83 * ratio;
  if (ratio > 0 && ratio < 1) {
    clouds.style.setProperty('transform','translateX(' + translate + 'vw)');
  }
});
  
  })(jQuery);