(function($) {

  // FUNCTION TO UPDATE THE BANNER IMAGE/VIDEO BASED ON THE SCREEN SIZE/VIDEO ERROR
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

    // Parallax effect on the banner
    $(window).scroll(function () {
      $('.banner-container').css({'transform': 'translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
      $('.hero-header__logo').css({'transform': 'translate(-50%, -50%) translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
    });

   // Create an Intersection Observer for the titles
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !$(entry.target).hasClass('animated')) {
      $(entry.target).css('animation', 'title-slide-up 1.5s ease-in backwards');
      titleObserver.unobserve(entry.target); // Stop observing the title once it has been animated
    }
  });
}, { threshold: 0.3});

// Create an Intersection Observer for the sections
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting ) {
      $(entry.target).animate({opacity: 1});
      sectionObserver.unobserve(entry.target);

      $(entry.target).find('.title').each(function() {
        titleObserver.observe(this);
      });
    }
  });
}, { threshold: 0.3});

document.querySelectorAll(".hero-header, #story, #characters-swiper, #place, #studio, #nomination, .site-footer").forEach(section => { sectionObserver.observe(section) });
  // Swiper slider
    $(document).ready(function() {
      var swiper;
    
      function initSwiper(options = {}) {
        var swiperContainer = document.querySelector('.mySwiper');
        if (swiperContainer) {
            swiper = new Swiper('.mySwiper', {
                direction: "horizontal",
                loop: true,
                spaceBetween: 80,
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
                ...options
            });
        }
    }
    
    // Initiates the swiper slider
    window.addEventListener('load', function() {
      if ($(window).width() < 700) {
        initSwiper({
          slidesPerView: 1,
          spaceBetween: 10
        });
      } else {
        initSwiper();
      }
   });
    
    $(window).resize(function() {
      if (swiper) {
        swiper.destroy(); 

      if ($(window).width() < 700) {
        initSwiper({
          slidesPerView: 1,
          spaceBetween : 10
        });
      } else {
        initSwiper(); // Use the default swiper settings for larger screens
      }
    }

    });
  });

// Speed up flower rotation with scroll

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const rotationSpeed = 1 + scrollPos / 1500; // Adjust the divisor to control the speed
  document.documentElement.style.setProperty('--flowers-rotation-speed', `${rotationSpeed}s`);
});

// Clouds animation that move with scroll (recover window height and clouds element)
const windowHeight = window.innerHeight;
const clouds = document.querySelector('.clouds');

window.addEventListener('scroll', () => {

  // Recover the dimensions & position of the element "clouds"
  const cloudsRect = clouds.getBoundingClientRect();

  // We calculate the ratio of distance between the top of the window and the top of the clouds
  const ratio = (windowHeight - cloudsRect.y) / windowHeight;

  // Multiply this ratio by -20.83 to get the value of the translation
  const translate = -20.83 * ratio;

  // If the ratio is between 0 and 1, this means the clouds are visible, so we apply the movement to the clouds
  if (ratio > 0 && ratio < 1) {
    clouds.style.setProperty('transform','translateX(' + translate + 'vw)');
  }
});
  
  })(jQuery);