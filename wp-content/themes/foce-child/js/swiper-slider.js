const swiper = new Swiper('.swiper-main-container', {
    // Optional parameters
    slidesPerView: 1, // Number of slides visible at once (default: 1)
    spaceBetween: 20, // Space between slides (default: 0)
    loop: true, // Enable infinite looping (default: false)
    pagination: {
      el: '.swiper-pagination', // Selector for pagination element (optional)
    },
    navigation: {
      nextEl: '.swiper-button-next', // Selector for next button (optional)
      prevEl: '.swiper-button-prev', // Selector for previous button (optional)
    },
    breakpoints: {
      // Optional - Set different options for different screen sizes
      640: {
        slidesPerView: 2, // Change slides per view on smaller screens
      },
      1024: {
        slidesPerView: 3, // Change slides per view on larger screens
      },
    }
  });
  