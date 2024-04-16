jQuery(document).ready(function($) {
    console.log("Document is ready.");

    // Define sections to animate
    var sections = $('section.banner, section.story, article#characters, article#place, section#studio, .site-footer');

    // Function to update active classes based on scroll position
    function updateSections() {
        var scrollPosition = $(window).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - 100; //starts fading in 200px before top of section
            var bottom = top + $(this).height() + 100; //starts fading out 200px after bottom

            if (scrollPosition >= top && scrollPosition <= bottom) {
                $(this).addClass('activated');
            } else {
                $(this).removeClass('activated');
            }
        });
    }

    // Function to handle animations for sections in viewport
    function handleAnimations() {
        var scroll = $(window).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - .5; //starts fading in 200px before top of section
            var bottom = top + $(this).height() + .5; //starts fading out 200px after bottom

            if (scroll >= top && scroll <= bottom) {
                $(this).addClass('activated');
            } else {
                $(this).removeClass('activated');
            }
        });
    }

    // Call handleAnimations on initial load and scroll
    $(window).on('load scroll', function() {
        handleAnimations();
        updateSections();
    });

    // Test video element
    var video = $('video');
    if (video.length > 0) {
        video.each(function() {
            if (this.readyState === 4) {
                console.log("Video is ready to play");
            } else {
                console.log("Video is not ready to play");
                var posterURL = $(this).attr('poster');
                if (posterURL) {
                    console.log("Poster URL: ", posterURL);
                    $('<img>').attr('src', posterURL).insertAfter($(this));
                }
            }
        });
    } else {
        console.log("No video element found");
    }
});
