jQuery(document).ready(function($) {
  // Function to check if an element has ::before and ::after pseudo-elements
  function hasBeforeAndAfterPseudoElements(element) {
    const computedStyle = window.getComputedStyle(element, '::before'),
          computedStyleAfter = window.getComputedStyle(element, '::after');
    return computedStyle.getPropertyValue('content') !== 'none' && computedStyleAfter.getPropertyValue('content') !== 'none';
  }

  // Define sections to animate
  const sections = document.querySelectorAll('section.banner, section.story, .story__article, .story#characters, article#place, section#studio, section#oscars, footer.site-footer');

  // Flag to track if banner animation has been applied
  let bannerAnimationApplied = false;

  // Section Intersecting Observer
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const sectionIndex = Array.prototype.indexOf.call(sections, section); // Get section index

      if (entry.isIntersecting) {
        // Banner animation (one-time)
        if (section.classList.contains('banner') && !bannerAnimationApplied) {
          section.classList.add('banner-slide-down', 'activated');

          const bannerLogo = section.querySelector('.banner-logo');
          if (bannerLogo) {
            bannerLogo.classList.add('section-title');
          }
          $('#floating-logo').addClass('float-logo');
          bannerAnimationApplied = true;
        } else {
          // Other sections animation
          const lastChildP = section.querySelector('p:last-of-type');
          if (lastChildP) {
            lastChildP.classList.add('section-fade-in', 'activated');
          }

          // Section content animation (headings & pseudo-elements)
          const elements = section.querySelectorAll('h1, h2, article, div, footer.site-footer');
          if (elements) {
            elements.forEach((element) => {
              element.classList.add('section-title', 'activated');
              if (hasBeforeAndAfterPseudoElements(element)) {
                element.classList.add('section-title');
              }
            });
          }
        }
      } else if (sectionIndex > 0 && !entry.isIntersecting) {
        // Reset animations for sections out of view (except banner)
        if (!section.classList.contains('banner')) {
          const elements = section.querySelectorAll('.section-fade-in, .section-title');
          if (elements) {
            elements.forEach((element) => element.classList.remove('section-fade-in', 'section-title', 'activated'));
          }
        }
      }
    });
  }, { threshold: 0.3 });

  // Minimum viewport height logic
  let previousScrollY = 0;
  $(window).scroll(function() {
    const currentScrollY = $(window).scrollTop();
    const windowHeight = $(window).height();

    // Check if all sections are out of view
    let allSectionsOutOfView = true;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (sectionTop < currentScrollY + windowHeight && sectionTop + sectionHeight > currentScrollY) {
        allSectionsOutOfView = false;
        return false; // Exit loop after finding a visible section
      }
    });

    // Handle reaching the end (no sections visible)
    if (allSectionsOutOfView && currentScrollY > previousScrollY) {
      // Trigger your desired visual cue or animation for reaching the end
      console.log("Reached the end of content!"); // Replace with your logic
    }

    previousScrollY = currentScrollY;
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});