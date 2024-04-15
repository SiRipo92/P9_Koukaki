<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Add the parent style
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Add the parallax style
    wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri() . '/sass/custom.css' );

    // Add the Swiper CSS
    wp_enqueue_style( 'swiper-bundle', get_template_directory_uri() . '-child/js/swiper-bundle.min.js', array(), '10.0.0', true);

    // Add jQuery from a CDN
    wp_enqueue_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js', array('jquery'), '3.7.1', true );

    // Add jQuery Parallax as a dependency to jQuery
    wp_enqueue_script('jquery-parallax', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-parallax/1.1.3/jquery-parallax-min.js', array('jquery'), '1.1', true);

    // Add custom script
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'), '1.0.0', true );
    
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}