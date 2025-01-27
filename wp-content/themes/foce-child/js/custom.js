(function($) {

  //******************************* BURGER MENU *******************************//
  $(document).ready(function() {
    const menuButton = document.querySelector('.menu-toggle'); 
    const navMenu = document.querySelector('.mobile-nav__container');
    const mainNavigation = document.querySelector('.main-navigation');
    const navLinks = document.querySelectorAll('.nav__link a');

    if (menuButton && navMenu && mainNavigation) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            menuButton.classList.toggle('open'); 
        });

        // Add event listener to each navigation link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Close the menu when a link is clicked
                navMenu.classList.remove('open');
                menuButton.classList.remove('open');

                // If navMenu and menuButton do not have 'open' class, remove 'toggled' from mainNavigation
                if (!navMenu.classList.contains('open') && !menuButton.classList.contains('open')) {
                    mainNavigation.classList.remove('toggled');
                }
            });
        });
    }
  });

  //******************************* BANNER IMAGE & VIDEO *******************************//
  $(document).ready(function() {
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
  });

  // Parallax effect on the banner
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $('.banner-container').css({'transform': 'translateY(' + (scrollTop * 0.7) + 'px)'});
    $('.hero-header__logo').css({'transform': 'translate(-50%, -50%) translateY(' + (scrollTop * 0.7) + 'px)'});
  });

  //******************************* INTERSECTION OBSERVERS *******************************//
  $(document).ready(function() {
    // FOR TITLES
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).css('animation', 'title-slide-up 1.5s ease-in backwards');
          titleObserver.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 });

    // FOR SECTIONS
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).animate({opacity: 1});
           // Also animate p elements with the class 'text-content' within the section
          $(entry.target).find('p.text-content').animate({opacity: 1}, 1500);
          
          sectionObserver.unobserve(entry.target);

          $(entry.target).find('.title').each(function() {
            titleObserver.observe(this);
          });
        }
      });
    }, { threshold: 0.3 });

  // Start observing the sections
  $(".hero-header, #story, #characters-swiper, #place, #studio, #nomination, .site-footer").each(function() {
    sectionObserver.observe(this);
  });
  });

  //******************************* SWIPER SLIDER *******************************//
  $(document).ready(function() {
    let swiper;

    function initSwiper(options = {}) {
      let swiperOptions = {
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
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
          },
          ...options
      };

      if (swiper) {
          swiper.destroy(true, true);
      }
      
      swiper = new Swiper('.mySwiper', swiperOptions);
  }

    // CHECK WIDTH OF THE WINDOW & ADAPT SWIPER SLIDES TO SCREEN SIZE
    $(window).on('load', function() {
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
      if ($(window).width() < 700) {
          initSwiper({
              slidesPerView: 1,
              spaceBetween : 10
          });
      } else {
          initSwiper();
      }
  });
});

  //******************************* ANIMATIONS *******************************//
  $(document).ready(function() {

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
        clouds.style.setProperty('transform', 'translateX(' + translate + 'vw)');
      }
    });
  });
})(jQuery);
