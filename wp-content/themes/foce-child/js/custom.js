(function($) {

  // Make sections appear on scroll
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        if (entry.target) {
          entry.target.classList.remove('fade-in');
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".animation-item").forEach(sectionInSite => sectionObserver.observe(sectionInSite));

  const titlesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('title-anim');
      }
    });
  }, { threshold: 0.9 });

  document.querySelectorAll("h2 > span").forEach(sectionTitle => titlesObserver.observe(sectionTitle));

  // Parallax effect
  $(window).scroll(function () {
    $('.banner-container').css({'transform': 'translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
    $('.hero-header__logo').css({'transform': 'translate(-50%, -50%) translateY(' + ($(this).scrollTop() * 0.7) + 'px)'});
  });

  // Import Swiper
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-main-container', {
      slidesPerView: "auto",
      effect: "coverflow",
      spaceBetween: 20, // Space between slides (default: 0)
      loop: true,// infinite looping (default: false)
      grabCursor: true,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2000
      }, 
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination', // Selector for pagination element (optional)
      },
      breakpoints: {
        // Optional - Set different options for different screen sizes
        640: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      }
    });
  }); 

})(jQuery); // Added the missing closing parenthesis here
