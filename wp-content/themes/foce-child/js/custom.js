(function($) {

  //******************************* MOBILE MENU *******************************//
// Toggle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-toggle'); 
  const navMenu = document.querySelector('.mobile-nav__container');

  if (menuButton && navMenu) {
      // Add a 'click' event listener to your menu button
      menuButton.addEventListener('click', function() {
          navMenu.classList.toggle('open');
          menuButton.classList.toggle('open'); 
      });
  }
});

  //******************************* BANNER IMAGE & VIDEO *******************************//
  // Check if the banner video is playing and if it's not, display the fallback image
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
  const scrollTop = $(this).scrollTop();
  $('.banner-container').css({'transform': 'translateY(' + (scrollTop * 0.7) + 'px)'});
  $('.hero-header__logo').css({'transform': 'translate(-50%, -50%) translateY(' + (scrollTop * 0.7) + 'px)'});
});


  //******************************* INTERSECTION OBSERVERS *******************************//
   // FOR TITLES
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !$(entry.target).hasClass('animated')) {
      $(entry.target).css('animation', 'title-slide-up 1.5s ease-in backwards');
      titleObserver.unobserve(entry.target); // Stop observing the title once it has been animated
    }
  });
}, { threshold: 0.3});

// FOR SECTIONS
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

  //******************************* SWIPER SLIDER *******************************//
  // SWIPER SLIDER FOR CHARACTERS
    $(document).ready(function() {
      var swiper;
    
      function initSwiper(options = {}) {
        const swiperContainer = document.querySelector('.mySwiper');
        if (swiperContainer) {
            swiper = new Swiper('.mySwiper', {
                direction: "horizontal",
                loop: true,
                spaceBetween: 100,
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
    
    // CHECK WIDTH OF THE WINDOW & ADAPT SWIPER SLIDES TO SCREEN SIZE
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
        initSwiper();
      }
    }

    });
  });

//******************************* ANIMATIONS *******************************//
// FLOWER ROTATION ANIMATION
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const rotationSpeed = 1 + scrollPos / 1500; // Adjust the divisor to control the speed
  document.documentElement.style.setProperty('--flowers-rotation-speed', `${rotationSpeed}s`);
});

// CLOUDS PARALLAX ANIMATION
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